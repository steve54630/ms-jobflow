import { CandidacyStatus } from "src/domain/enums/candidacy.enum";

export interface CandidacyOutputDto {
    job_offer_id: number;
    cv_id: string;
    member_id: number;
    remember?: Date | null;
    status?: CandidacyStatus | null;
    description?: string | null;
}