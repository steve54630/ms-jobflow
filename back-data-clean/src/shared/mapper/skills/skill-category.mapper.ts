import { Skills } from '@prisma/client-data';
import { SkillCategory } from 'src/domain/enums/skill.enum';

export class SkillCategoryMapper {
  static toDomainFromPrisma(prismaCategory: Skills): SkillCategory {
    return prismaCategory === Skills.hard
      ? SkillCategory.HARD
      : SkillCategory.SOFT;
  }

  static toPrisma(category: SkillCategory): Skills {
    return category === SkillCategory.HARD ? Skills.hard : Skills.soft;
  }
}
