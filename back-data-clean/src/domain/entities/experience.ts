export interface Experience {
    id: number;
    start_date: Date;
    end_date?: Date | null;
    title: string;
    company_name: string;
    location: string;
    description?: string | null;
    member_id: number;
}