import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { CreateCandidacyDto } from './dto/create-candidacy.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class OfferService {
  constructor(private readonly natsService: NatsService) {}

  async getCandidaciesForMember(memberId: number) {
    return await this.natsService.send('offers.candidacy', { memberId });
  }
  async applyToOffer(memberId: number, dto: CreateCandidacyDto) {
    return await this.natsService.send('offers.apply', {
      memberId,
      dto,
      offerId: dto.ftid,
    });
  }
  async getFavoritesForMember(memberId: number) {
    return await this.natsService.send('offers.getfavorites', { memberId });
  }
  async toggleFavoriteOffer(memberId: number, offerId: string) {
    return await this.natsService.send('offers.togglefavorite', { sub : memberId, offerId });
  }
  async findOne(id: number) {
    return await this.natsService.send('offers.getOne', { id });
  }
  async findOrFetchOfferByFtid(ftid: string) {
    return await this.natsService.send('offers.getbyftid', { ftid });
  }
  fetchOffers(query: string, page: number) {
    return this.natsService.send('offers.getall', { query, page });
  }
  saveFtOfferIfNeeded(createOfferDto: CreateOfferDto) {
    return this.natsService.send('offers.create', { createOfferDto });
  }
}
