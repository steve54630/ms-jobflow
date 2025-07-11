import { Profile } from "../entities/profile";

export abstract class ProfileRepository {
    abstract find(member_id: number) : Promise<Profile>
    abstract create(profile: Profile) : Promise<Profile>
    abstract remove(id: number) : Promise<{count: number}>
}