import {
  Controller
} from '@nestjs/common';
import { OfferService } from './offer.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @MessagePattern('offers.get')
  async getOffers(@Payload() { query, page }: { query: string; page: number }) {
    return this.offerService.fetchOffers(query, page);
  }
}
