import { Education } from "../entities/education";

export abstract class EducationRepository {
    abstract create(education: Education): Promise<Education>
    abstract findAll(member_id: number): Promise<Education[]>
    abstract findUnique(id: number): Promise<Education | null>
    abstract update(id: number, education: Partial<Education>): Promise<Education>
    abstract remove(id: number): Promise<Education>
}