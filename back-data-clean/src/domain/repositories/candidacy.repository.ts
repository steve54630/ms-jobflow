import { Candidacy } from "../entities/candidacy";

export abstract class CandidacyRepository {
    abstract create(candidacy: Candidacy) : Promise<Candidacy>
    abstract findAll(member_id: number) : Promise<Candidacy[]>
    abstract findUnique(cv_id: string, job_offer_id: number) : Promise<Candidacy | null>
}