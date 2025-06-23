import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from 'src/offer/dto/create-offer.dto';
import { Candidacy, Job_offer } from '@prisma/client';
import { FtApiService } from 'src/ft/ft-api.service';
import { CreateCandidacyDto } from './dto/create-candidacy.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OfferController {
  constructor(
    private readonly offerService: OfferService,
    private readonly ftApiService: FtApiService,
  ) {}

  // Enregistrer une offre dans notre base
  @MessagePattern('offers.create')
  async create(@Payload() createOfferDto: CreateOfferDto): Promise<Job_offer> {
    return await this.offerService.saveFtOfferIfNeeded(createOfferDto);
  }

  // Obtenir les dernières offres de pôle emploi

  // Obtenir une seule offre de pôle emploi
  @MessagePattern('offers.getbyftid')
  async getOfferByFtid(@Payload() { ftid }: { ftid: string }) {
    return this.offerService.findOrFetchOfferByFtid(ftid);
  }

  // Retrouver une offre par son ID dans notre base
  @MessagePattern('offers.getOne')
  async findOne(@Payload() { id }: { id: number }): Promise<Job_offer | null> {
    return await this.offerService.findOne(id);
  }

  // Mettre en fav une offre de pôle emploi
  @MessagePattern('offers.togglefavorite')
  async toggleFavoriteOffer(
    @Payload() { offerId, sub }: { offerId: string; sub: number },
  ) {
    return this.offerService.toggleFavoriteOffer(sub, offerId);
  }

  // Retrouver les offres fav d'un membre
  @MessagePattern('offers.getfavorites')
  async getFavorites(@Payload() { sub }: { sub: number }) {
    return this.offerService.getFavoritesForMember(sub);
  }
}
