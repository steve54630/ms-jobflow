import { Event } from "src/domain/entities/event";

export abstract class EventRepository {
    abstract create(event: Event): Promise<Event>;
    abstract findAll(member_id: number): Promise<Event[]>;
    abstract findUnique(id: number): Promise<Event | null>;
    abstract update(id: number, event: Partial<Event>): Promise<Event>;
    abstract remove(id: number): Promise<Event>;
}