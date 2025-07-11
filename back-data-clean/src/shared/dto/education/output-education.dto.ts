export interface EducationOutputDto {
  id?: number;
  start_date: Date | string;
  end_date?: Date | string;
  is_obtained?: boolean
  title: string;
  school_name: string;
  location: string;
  description?: string;
}