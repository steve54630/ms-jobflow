export class Event {
  id: number;
  title: string;
  start_date: Date;
  end_date: Date;
  description: string | null;
  location: string | null;
  member_id: number;
  job_offer_id: string | number;
  created_at: Date;
  updated_at: Date;
}