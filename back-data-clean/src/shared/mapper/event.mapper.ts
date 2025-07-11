import { EventOutputDto } from '../dto/event/output.event.dto';
import { Event } from 'src/domain/entities/event';
import { Event as PrismaEvent } from '@prisma/client-data';
import { CreateEventDto } from '../dto/event/create-event.dto';

export class EventMapper {
  static toDto(event: Event): EventOutputDto {
    return {
      id: event.id,
      title: event.title,
      startDate: event.start_date.toLocaleDateString(),
      endDate: event.end_date ? event.end_date.toLocaleDateString() : undefined,
      description: event.description ?? undefined,
      location: event.location ?? undefined,
      jobOfferId: event.job_offer_id ?? undefined,
      startHour: event.start_date.toLocaleTimeString(),
      endHour: event.end_date ? event.end_date.toLocaleTimeString() : undefined,
    };
  }

  static toDomainFromPrisma(event: PrismaEvent): Event {
    return {
      id: event.id,
      title: event.title,
      start_date: event.start_date,
      end_date: event.end_date,
      description: event.description,
      location: event.location,
      member_id: event.member_id,
      job_offer_id: event.job_offer_id,
    };
  }

  static toPrisma(event: Event): Omit<PrismaEvent, 'id' | 'created_at' | 'updated_at'>  {
    return {
      title: event.title,
      start_date: event.start_date,
      end_date: event.end_date ?? null,
      description: event.description ?? null,
      location: event.location ?? null,
      member_id: event.member_id,
      job_offer_id: event.job_offer_id ?? null,
    };
  }

  static toEntity(event: CreateEventDto): Event {
    return {
      id: 0,
      title: event.title,
      start_date: event.start_date,
      end_date: event.end_date ?? null,
      description: event.description ?? null,
      location: event.location ?? null,
      member_id: event.member_id,
      job_offer_id: event.job_offer_id ?? null,
    };
  }
}
