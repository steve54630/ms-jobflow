export interface Event {
    id: number;
    title: string;
    start_date: Date;
    end_date?: Date | null;
    description?: string | null;
    location?: string | null;
    member_id: number;
    job_offer_id?: number | null;
}