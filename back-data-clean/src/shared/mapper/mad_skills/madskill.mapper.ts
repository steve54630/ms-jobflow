import { Mad_skill } from '@prisma/client-data';
import { MadSkill } from 'src/domain/entities/madskills';
import { MadSkillCategoryMapper } from './ms-category.mapper';
import { MadSkillsOutputDto } from 'src/shared/dto/madskills/output-madskills.dto';
import { CreateMadSkillDto } from 'src/shared/dto/madskills/create-madskill.dto';
import { MadSkillCategory } from 'src/domain/enums/madskill.enum';

export class MadSkillMapper {
  static toDomainFromPrisma(madskill: Mad_skill): MadSkill {
    return {
      id: madskill.id,
      title: madskill.title,
      category: MadSkillCategoryMapper.toDomain(madskill.category),
    };
  }
  
  static toDto(madskill: MadSkill): MadSkillsOutputDto {
    return {
      id: madskill.id,
      title: madskill.title,
      category: madskill.category
    };
  }
  
  static toEntity(madSkill : CreateMadSkillDto) : MadSkill {
    return {
      id: 0,
      title: madSkill.title,
      category: MadSkillCategoryMapper.toDomain(madSkill.category)
    };
  }

  static toPrisma(madskill: MadSkill, member_id: number): Omit<Mad_skill, 'id' | 'created_at' | 'updated_at'> {
    return {
      title: madskill.title,
      category: MadSkillCategoryMapper.toPrisma(madskill.category),
      member_id,
    };
  }
}
