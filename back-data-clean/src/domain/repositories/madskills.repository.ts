import { MadSkill } from "../entities/madskills";

export abstract class MadSkillRepository {
    abstract findAll(member_id: number) : Promise<MadSkill[]>
    abstract add(madskill: MadSkill, member_id: number) : Promise<MadSkill>
    abstract remove(madskill_id: number, member_id: number) : Promise<MadSkill>
}