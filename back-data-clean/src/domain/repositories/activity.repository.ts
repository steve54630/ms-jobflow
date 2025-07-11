import { Activity } from "../entities/activity";

export abstract class ActivityRepository {
    abstract create(activity: Activity) : Promise<Activity>;
    abstract findAll(member_id: number) : Promise<Activity[]>;
    abstract findUnique(id: number) : Promise<Activity | null>;
    abstract update(id: number, data: Partial<Activity>) : Promise<Activity>;
    abstract remove(id: number) : Promise<{count: number}>;
}