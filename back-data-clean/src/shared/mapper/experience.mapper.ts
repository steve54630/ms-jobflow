import { Experience } from "src/domain/entities/experience";
import { Experience as PrismaExperience } from "@prisma/client-data";
import { ExperienceOutputDto } from "../dto/experience/output.experience.dto";
import { CreateExperienceDto } from "../dto/experience/create-experience.dto";

export class ExperienceMapper {

    static toDto(experience : Experience) : ExperienceOutputDto{
        return {
            id: experience.id,
            title: experience.title,
            start_date: experience.start_date,
            end_date: experience.end_date ?? undefined,
            company_name: experience.company_name,
            location: experience.location,
            description: experience.description ?? undefined,
        };
    }

    static toPrisma(experience : Experience) : Omit<PrismaExperience, 'id' | 'created_at' | 'updated_at'> {
        return {
            title: experience.title,
            start_date: experience.start_date,
            end_date: experience.end_date ?? null,
            company_name: experience.company_name,
            location: experience.location,
            description: experience.description ?? null,
            member_id: experience.member_id
        };
    }

    static toDomainFromPrisma(dto : PrismaExperience) : Experience{
        return {
            id: dto.id,
            title: dto.title,
            start_date: dto.start_date,
            end_date: dto.end_date ?? null,
            company_name: dto.company_name,
            location: dto.location,
            description: dto.description ?? null,
            member_id: dto.member_id
        };
    }

    static toEntity(dto : CreateExperienceDto, member_id : number) : Experience{
        return {
            id: 0,
            title: dto.title,
            start_date: dto.start_date,
            end_date: dto.end_date ?? null,
            company_name: dto.company_name,
            location: dto.location,
            description: dto.description ?? null,
            member_id
        };
    }
}