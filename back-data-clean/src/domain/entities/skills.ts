import { SkillCategory } from "../enums/skill.enum";

export interface Skill {
    id: number;
    title: string;
    category: SkillCategory;
}