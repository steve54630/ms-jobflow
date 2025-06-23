import { Body, Controller, Delete, Get, Patch, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from 'src/offer/dto/create-offer.dto';
import { Request } from 'express';
import { CreateCandidacyDto } from './dto/create-candidacy.dto';

@Controller('offers')
export class OfferController {
  constructor(
    private readonly offerService: OfferService,
  ) { }

  // Enregistrer une offre dans notre base
  @Post()
  async create(
    @Body() createOfferDto: CreateOfferDto,
    @Req() req: Request
  ) {
    return await this.offerService.saveFtOfferIfNeeded(
      createOfferDto,
    );
  }

  // Obtenir les dernières offres de pôle emploi
  @Get()
  async getOffers(
    @Query('q') query = '',
    @Query('page') page = '0',
  ) {
    return await this.offerService.fetchOffers(query, parseInt(page));
  }

  // Obtenir une seule offre de pôle emploi
  @Get('/by-ftid/:ftid')
  async getOfferByFtid(@Param('ftid') ftid: string) {
    return await this.offerService.findOrFetchOfferByFtid(ftid);
  }

  // Retrouver une offre par son ID dans notre base
  @Get('/by-id/:id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request) {
    const memberId = req.user!['sub'];
    return await this.offerService.findOne(id);
  }

  // Mettre en fav une offre de pôle emploi
  @Post('/:ftid/favorites')
  async toggleFavoriteOffer(
    @Param('ftid') offerId: string,
    @Req() req: Request
  ) {
    const memberId = req.user!['sub'];
    return await this.offerService.toggleFavoriteOffer(memberId, offerId);
  }

  // Retrouver les offres fav d'un membre
  @Get('/favorites')
  async getFavorites(@Req() req: Request) {
    const memberId = req.user!['sub'];
    return await this.offerService.getFavoritesForMember(memberId);
  }

  // Postuler à une offre : penser à passer en body la ftid et l'id du cv lié
  @Post('/candidacies/:ftid')
  async applyToOffer(
    @Param('ftid') offerId: string,
    @Body() dto: CreateCandidacyDto,
    @Req() req: Request
  ) {
    dto.ftid = offerId;
    const memberId = req.user!['sub'];
    return await this.offerService.applyToOffer(memberId, dto);
  }

  // Retrouver les candidatures d'un membre
  @Get('/candidacies')
  async getApplications(@Req() req: Request) {
    const memberId = req.user!['sub'];
    return await this.offerService.getCandidaciesForMember(memberId);
  }

  // Afficher une candidature
  @Get('/candidacies/:offerId')
  async getCandidacy(
    @Param('offerId', ParseIntPipe) id: number,
    @Req() req: Request) {
    const memberId = req.user!['sub'];
    return await this.offerService.findOne(id);
  }
}
