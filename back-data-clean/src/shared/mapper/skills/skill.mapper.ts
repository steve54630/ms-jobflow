import { Skill as PrismaSkill } from "@prisma/client-data";
import { Skill } from "src/domain/entities/skills";
import { SkillCategoryMapper } from "./skill-category.mapper";
import { SkillOutputDto } from "src/shared/dto/skills/output-skill.dto";
import { CreateSkillDto } from "src/shared/dto/skills/create-skill.dto";
import { SkillCategory } from "src/domain/enums/skill.enum";

export class SkillMapper {
    static toDomainFromPrisma(raw: PrismaSkill): Skill {
        return {
            id: raw.id,
            title: raw.title,
            category: SkillCategoryMapper.toDomainFromPrisma(raw.category),
        };
    }

    static toPrisma(raw: Skill): Omit<PrismaSkill, 'id' | 'created_at' | 'updated_at'> {
        return {
            title: raw.title,
            category: SkillCategoryMapper.toPrisma(raw.category),
        };
    }

    static toDto(raw: Skill): SkillOutputDto {
        return {
            id: raw.id,
            title: raw.title,
            category: raw.category,
        };
    }

    static toEntity(raw: CreateSkillDto): Skill {
        return {
            id: 0,
            title: raw.title,
            category: SkillCategory.HARD
        };
    }

}