import { Profile as PrismaProfile } from '@prisma/client-data';
import { Profile } from 'src/domain/entities/profile';
import { CreateProfileDto } from '../dto/profile/create-profile.dto';
import { ProfileOutputDto } from '../dto/profile/output-profile.dto';

export class ProfileMapper {
  static toDomainFromPrisma(raw: PrismaProfile): Profile {
    return {
      id: raw.id,
      firstname: raw.firstname ?? null,
      picture: raw.picture ?? null,
      phone: raw.phone ?? null,
      lastname: raw.lastname ?? null,
      description: raw.description ?? null,
      member_id: raw.member_id,
      email: raw.email ?? null,
      location: raw.location ?? null,
      has_car: raw.has_car,
    };
  }

  static toPrisma(profile: Profile): Omit<PrismaProfile, 'id' | 'created_at' | 'updated_at'> {
    return {
      picture: profile.picture ?? null,
      firstname: profile.firstname ?? null,
      lastname: profile.lastname ?? null,
      email: profile.email ?? null,
      phone: profile.phone ?? null,
      location: profile.location ?? null,
      description: profile.description ?? null,
      has_car: profile.has_car,
      member_id: profile.member_id,
    };
  }

  static toDto(profile: Profile): ProfileOutputDto {
    return {
      id: profile.id,
      picture: profile.picture ?? undefined,
      firstname: profile.firstname ?? undefined,
      lastname: profile.lastname ?? undefined,
      email: profile.email ?? undefined,
      phone: profile.phone ?? undefined,
      location: profile.location ?? undefined,
      description: profile.description ?? undefined,
      has_car: profile.has_car,
    };
  }

  static toEntity(
    raw: CreateProfileDto,
    member_id: number,
  ): Profile {
    return {
      id: 0,
      picture: raw.picture ?? null,
      firstname: raw.firstname ?? null,
      lastname: raw.lastname ?? null,
      email: raw.email ?? null,
      phone: raw.phone ?? null,
      location: raw.location ?? null,
      has_car: raw.has_car,
      description: raw.description ?? null,
      member_id,
    };
  }
}
