export interface ExperienceOutputDto {
  id?: number;
  start_date: Date | string;
  end_date?: Date | string | null;
  title: string;
  company_name: string;
  location: string;
  description?: string | null;
}