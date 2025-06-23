import { Module } from '@nestjs/common';
import { CandidacyService } from './candidacy.service';
import { CandidacyController } from './candidacy.controller';
import { OfferService } from 'src/offer/offer.service';

@Module({
  controllers: [CandidacyController],
  providers: [CandidacyService],
  imports: [OfferService],
})
export class CandidacyModule {}
