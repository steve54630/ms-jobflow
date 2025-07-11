import { Experience } from "../entities/experience";

export abstract class ExperienceRepository {
    abstract create(experience: Experience): Promise<Experience>
    abstract findAll(member_id: number): Promise<Experience[]>
    abstract findUnique(id: number): Promise<Experience | null>
    abstract update(id: number, experience: Partial<Experience>): Promise<Experience>
    abstract delete(id: number): Promise<Experience>
}