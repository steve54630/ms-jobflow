export interface OfferOutputDto {
    title: string;
    ftid: string;
    description: string;
    location?: string | null;
    contract_type?: string | null;
    experience_length?: string | null;
    professional_field?: string | null;
    work_time?: string | null;
    salary?: string | null;
    handy_friendly?: boolean | null;
    update_ft?: Date | null;
}