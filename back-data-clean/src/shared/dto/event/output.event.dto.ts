export interface EventOutputDto {
  id?: number;
  title: string;
  startDate: string;
  startHour: string;
  endDate?: string;
  endHour?: string;
  description?: string;
  location?: string;
  jobOfferId?: string | number; // ID de l'offre
}