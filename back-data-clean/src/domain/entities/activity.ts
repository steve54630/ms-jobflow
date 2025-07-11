export interface Activity {
    id: number;
    title: string;
    location: string;
    description?: string | null;
    start_date: Date;
    end_date?: Date | null;
    member_id: number;
}