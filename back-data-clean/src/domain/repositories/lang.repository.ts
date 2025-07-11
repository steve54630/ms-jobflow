import { Langue } from "../entities/lang";

export abstract class LangRepository {
    abstract findAll() : Promise<Langue[]>
    abstract addLang(lang: Langue, member_id: number) : Promise<{member_id: number, langue_id: number}>
    abstract removeLang(lang_id: number, member_id: number) : Promise<{member_id: number, langue_id: number}>
    abstract findMemberLang(member_id: number) : Promise<Langue[]>
}