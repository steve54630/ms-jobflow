import { Body, Injectable, Post, Req } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCandidacyDto } from 'src/offer/dto/create-candidacy.dto';

@Injectable()
export class CandidacyService {
  offerService: any;
  constructor(private prisma: PrismaService) {}

  async applyToOffer(memberId: number, dto: CreateCandidacyDto) {
    let offerId = dto.job_offer_id;

    // Si on a un ftid mais pas d'id d'offre, on va chercher ou créer l'offre
    if (!offerId && dto.ftid) {
      const offer = await this.offerService.findOrFetchOfferByFtid(dto.ftid);
      offerId = offer.id;
    }

    if (!offerId) {
      throw new Error(
        "Impossible de postuler : aucun identifiant d'offre fourni.",
      );
    }

    return this.prisma.candidacy.create({
      data: {
        member_id: memberId,
        cv_id: dto.cv_id,
        job_offer_id: offerId,
        description: dto.description,
      },
    });
  }

  async getCandidaciesForMember(memberId: number) {
    return this.prisma.candidacy.findMany({
      where: { member_id: memberId },
      include: {
        job_offer: true, // pour voir les infos de l’offre
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.candidacy.findFirst({
      where: { job_offer_id: id },
      include: {
        job_offer: true, // pour voir les infos de l’offre
      },
    });
  }
}
