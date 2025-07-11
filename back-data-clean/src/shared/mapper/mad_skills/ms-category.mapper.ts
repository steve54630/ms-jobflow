import { MadSkills } from "@prisma/client-data";
import { MadSkillCategory } from "src/domain/enums/madskill.enum";

export class MadSkillCategoryMapper {
    static toDomain(category: MadSkills) : MadSkillCategory{
        return category === "interest" ? MadSkillCategory.INTEREST : MadSkillCategory.HOBBIES;
    }
    
    static toPrisma(category: MadSkillCategory) : MadSkills{
        return category === MadSkillCategory.INTEREST ? "interest" : "hobbies";
    }
    
}