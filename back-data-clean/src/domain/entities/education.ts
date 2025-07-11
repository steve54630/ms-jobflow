export interface Education {
    id: number;
    title: string;
    start_date: Date;
    end_date: Date | null;
    school_name: string;
    is_obtained: boolean;
    location: string;
    description?: string | null;
    member_id: number;
}