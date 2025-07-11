import { Activity } from 'src/domain/entities/activity';
import { ActivityOutputDto } from '../dto/activity/output-activity.dto';
import { CreateActivityDto } from '../dto/activity/create-activity.dto';
import { Activity as PrismaActivity } from '@prisma/client-data';

export class ActivityMapper {
  static toDto(activity: Activity): ActivityOutputDto {
    return {
      id: activity.id,
      title: activity.title,
      description: activity.description ?? undefined,
      start_date: activity.start_date,
      end_date: activity.end_date ?? undefined,
      location: activity.location,
    };
  }

  static toPrisma(activity: Activity): Omit<PrismaActivity, 'id' | 'created_at' | 'updated_at'> {
    return {
      title: activity.title,
      description: activity.description ?? null,
      start_date: activity.start_date,
      end_date: activity.end_date ?? null,
      location: activity.location,
      member_id: activity.member_id
    };
  }

  static toDomainFromPrisma(activity: PrismaActivity): Activity {
    return {
      id: activity.id,
      title: activity.title,
      description: activity.description ?? null,
      start_date: activity.start_date,
      end_date: activity.end_date ?? null,
      location: activity.location,
      member_id: activity.member_id
    };
  }

  static toEntity(activity: CreateActivityDto, member_id: number): Activity {
    return {
      id: 0,
      title: activity.title,
      description: activity.description ?? null,
      start_date: activity.start_date,
      end_date: activity.end_date ?? null,
      location: activity.location,
      member_id,
    };
  }
}
