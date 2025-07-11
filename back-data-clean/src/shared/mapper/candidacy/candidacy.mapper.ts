import { Candidacy as PrismaCandidacy } from '@prisma/client-data';
import { Candidacy } from 'src/domain/entities/candidacy';
import { CandidacyOutputDto } from '../../dto/candidacy/output-candidacy.dto';
import { CreateCandidacyDto } from '../../dto/candidacy/create-candidacy.dto';
import { CandidacyStatus } from 'src/domain/enums/candidacy.enum';
import { addDays } from 'date-fns';
import { StatusMapper } from './status.mapper';

export class CandidacyMapper {
  static toPrisma(entity: Candidacy): Omit<PrismaCandidacy, 'id'> {
    return {
      job_offer_id: entity.job_offer_id,
      cv_id: entity.cv_id,
      member_id: entity.member_id,
      remember: entity.remember,
      description: entity.description,
      status: StatusMapper.toPrisma(entity.status!),
    };
  }

  static toDomainFromPrisma(raw: PrismaCandidacy): Candidacy {
    return {
      job_offer_id: raw.job_offer_id,
      cv_id: raw.cv_id,
      member_id: raw.member_id,
      remember: raw.remember,
      description: raw.description,
      status: StatusMapper.toDomainFromPrisma(raw.status!),
    };
  }

  static toDto(entity: Candidacy): CandidacyOutputDto {
    return {
      job_offer_id: entity.job_offer_id,
      cv_id: entity.cv_id,
      member_id: entity.member_id,
      remember: entity.remember ?? null,
      status: entity.status ?? null,
      description: entity.description ?? null,
    };
  }

  static toEntity(
    dto: CreateCandidacyDto,
    member_id: number,
    job_offer_id: number,
  ): Candidacy {
    return {
      job_offer_id,
      cv_id: dto.cv_id,
      member_id,
      remember: addDays(new Date(), 7),
      status: CandidacyStatus.PENDING,
      description: dto.description ? dto.description : null,
    };
  }
}
