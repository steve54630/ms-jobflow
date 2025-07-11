import { Skill } from "../entities/skills";

export abstract class SkillRepository {
    abstract findAll() : Promise<Skill>
    abstract add(skill: Skill, member_id: number) : Promise<Skill>
    abstract remove(skill_id: number, member_id: number) : Promise<Skill>
    abstract findAllMember(member_id: number) : Promise<Skill[]>
}