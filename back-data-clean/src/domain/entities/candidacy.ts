import { CandidacyStatus } from "../enums/candidacy.enum";

export interface Candidacy {
    job_offer_id: number;
    cv_id: string;
    member_id: number;
    remember: Date | null;
    status: CandidacyStatus | null;
    description: string | null;
}