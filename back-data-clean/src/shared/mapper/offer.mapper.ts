import { Job_offer } from '@prisma/client-data';
import { Offer } from 'src/domain/entities/offer';
import { OfferOutputDto } from '../dto/offer/output-offer.dto';
import { CreateOfferDto } from '../dto/offer/create-offer.dto';

export class OfferMapper {
  static toDto(raw: Offer): OfferOutputDto {
    return {
      title: raw.title,
      ftid: raw.ftid,
      location: raw.location,
      contract_type: raw.contract_type,
      experience_length: raw.experience_length,
      professional_field: raw.professional_field,
      work_time: raw.work_time,
      salary: raw.salary,
      handy_friendly: raw.handy_friendly,
      description: raw.description,
      update_ft: raw.update_ft,
    };
  }

  static toDomainFromPrisma(raw: Job_offer): Offer {
    return {
      id: raw.id,
      title: raw.title,
      ftid: raw.ftid,
      description: raw.description,
      location: raw.location,
      contract_type: raw.contract_type,
      experience_length: raw.experience_length,
      professional_field: raw.professional_field,
      work_time: raw.work_time,
      salary: raw.salary,
      handy_friendly: raw.handy_friendly,
      update_ft: raw.update_ft,
    };
  }

  static toPrisma(raw: Offer): Omit<Job_offer, 'id' | 'created_at' | 'updated_at'> {
    return {
      title: raw.title,
      ftid: raw.ftid,
      description: raw.description,
      location: raw.location ?? null,
      contract_type: raw.contract_type ?? null,
      experience_length: raw.experience_length ?? null,
      professional_field: raw.professional_field ?? null,
      work_time: raw.work_time ?? null,
      salary: raw.salary ?? null,
      handy_friendly: raw.handy_friendly ?? null,
      update_ft: raw.update_ft ?? null,
    };
  }

  static toEntity(
    raw: CreateOfferDto,
  ): Offer {
    return {
      id: 0,
      title: raw.title,
      ftid: raw.ftid,
      description: raw.description,
      location: raw.location ?? null,
      contract_type: raw.contract_type ?? null,
      experience_length: raw.experience_length ?? null,
      professional_field: raw.professional_field ?? null,
      work_time: raw.work_time ?? null,
      salary: raw.salary ?? null,
      handy_friendly: raw.handy_friendly ?? null,
      update_ft: raw.update_ft ?? null,
    };
  }
}
