export interface Profile {
    id: number;
    firstname?: string | null;
    lastname?: string | null;
    email?: string | null;
    phone?: string | null;
    location?: string | null;
    has_car: boolean;
    description?: string | null;
    picture?: string | null;
    member_id: number;
}