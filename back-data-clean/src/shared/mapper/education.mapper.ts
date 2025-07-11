import { Education } from 'src/domain/entities/education';
import { EducationOutputDto } from '../dto/education/output-education.dto';
import { CreateEducationDto } from '../dto/education/create-education.dto';
import { Education as PrismaEducation } from '@prisma/client-data';

export class EducationMapper {
  static toDto(education: Education): EducationOutputDto {
    return {
      id: education.id,
      title: education.title,
      description: education.description ?? undefined,
      start_date: education.start_date,
      end_date: education.end_date ?? undefined,
      location: education.location,
      school_name: education.school_name,
      is_obtained: education.is_obtained,
    };
  }

  static toPrisma(
    education: Education,
  ): Omit<PrismaEducation, 'id' | 'created_at' | 'updated_at'> {
    return {
      title: education.title,
      description: education.description ?? null,
      start_date: education.start_date,
      end_date: education.end_date ?? null,
      location: education.location,
      school_name: education.school_name,
      is_obtained: education.is_obtained,
      member_id: education.member_id,
    };
  }

  static toDomainFromPrisma(education: PrismaEducation): Education {
    return {
      id: education.id,
      title: education.title,
      description: education.description ?? null,
      start_date: education.start_date,
      end_date: education.end_date ?? null,
      location: education.location,
      school_name: education.school_name,
      is_obtained: education.is_obtained,
      member_id: education.member_id,
    };
  }

  static toEntity(education: CreateEducationDto, member_id: number): Education {
    return {
      id: 0,
      title: education.title,
      description: education.description ?? undefined,
      start_date: education.start_date,
      end_date: education.end_date ?? undefined,
      location: education.location,
      school_name: education.school_name,
      is_obtained: education.is_obtained,
      member_id,
    };
  }
}
