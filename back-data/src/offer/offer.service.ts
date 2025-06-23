import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { FtApiService } from 'src/ft/ft-api.service';

@Injectable()
export class OfferService {
  constructor(
    private prisma: PrismaService,
    private ftApiService: FtApiService
  ) { }

  async findOrFetchOfferByFtid(ftid: string) {
    return await this.saveFtOfferIfNeeded({ ftid } as CreateOfferDto);
  }

  async findOne(id: number) {
    return await this.prisma.job_offer.findUnique({ where: { id } });
  }

  async saveFtOfferIfNeeded(createOfferDto: CreateOfferDto) {
    const existing = await this.prisma.job_offer.findUnique({
      where: { ftid: createOfferDto.ftid }
    });
    if (existing) return existing;

    const ftOffer = await this.ftApiService.fetchOfferByFtid(createOfferDto.ftid);

    const data = {
      ftid: ftOffer.offerId,
      title: ftOffer.jobTitle,
      location: ftOffer.localisation,
      contract_type: ftOffer.contractType,
      experience_length: ftOffer.experienceLength,
      professional_field: ftOffer.professionalField,
      work_time: ftOffer.workTime,
      salary: ftOffer.salary,
      handy_friendly: ftOffer.handyFriendly,
      description: ftOffer.description,
      update_ft: ftOffer.updateFt,
    };

    // Supprimer les clés avec valeur undefined
    Object.keys(data).forEach(
      (key) => data[key] === undefined && delete data[key]
    );

    return await this.prisma.job_offer.create({ data });
  }

  async toggleFavoriteOffer(memberId: number, ftid: string) {
    const offer = await this.saveFtOfferIfNeeded({ ftid } as CreateOfferDto);

    const existing = await this.prisma.member_offer.findUnique({
      where: {
        member_id_offer_id: {
          member_id: memberId,
          offer_id: offer.id,
        },
      },
    });

    if (existing) {
      this.removeFavorite(memberId, offer.id);
      return { message: 'Offre retirée des favoris' };
    }

    await this.prisma.member_offer.create({
      data: {
        member_id: memberId,
        offer_id: offer.id,
      },
    });
    return { message: 'Offre ajoutée aux favoris' };
  }

  async removeFavorite(memberId: number, offerId: number) {
    return this.prisma.member_offer.delete({
      where: {
        member_id_offer_id: {
          member_id: memberId,
          offer_id: offerId,
        },
      },
    });
  }

  async getFavoritesForMember(memberId: number) {
    return this.prisma.member_offer.findMany({
      where: { member_id: memberId },
      include: {
        job_offer: true,
      },
    });
  }
}
