import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { FtApiService } from 'src/ft/ft-api.service';

@Module({
  controllers: [OfferController],
  providers: [OfferService, FtApiService],
})
export class OfferModule {}
