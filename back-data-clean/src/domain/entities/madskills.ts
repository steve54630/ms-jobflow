import { MadSkillCategory } from "../enums/madskill.enum";

export interface MadSkill {
    id: number;
    title: string;
    category: MadSkillCategory;
}