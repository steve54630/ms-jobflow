import { Controller } from '@nestjs/common';
import { CandidacyService } from './candidacy.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Candidacy } from '@prisma/client';
import { CreateCandidacyDto } from 'src/offer/dto/create-candidacy.dto';

@Controller()
export class CandidacyController {
  constructor(private readonly candidacyService: CandidacyService) {}

  // Postuler à une offre : penser à passer en body la ftid et l'id du cv lié
    @MessagePattern('offers.apply')
    async applyToOffer(
      @Payload() { sub, offerId, dto }: { sub: number, offerId: string, dto: CreateCandidacyDto },
    ) {
      dto.ftid = offerId;
      return this.candidacyService.applyToOffer(sub, dto);
    }
  
    // Retrouver les candidatures d'un membre
    @MessagePattern('offers.applications')
    async getApplications(@Payload() { sub }: { sub : number }) {
      
      return this.candidacyService.getCandidaciesForMember(sub);
    }
  
    // Afficher une candidature
    @MessagePattern('offers.candidacy')
    async getCandidacy(
      @Payload() { id }: { id: number }): Promise<Candidacy | null> {
      return await this.candidacyService.findOne(id);
    }
}
