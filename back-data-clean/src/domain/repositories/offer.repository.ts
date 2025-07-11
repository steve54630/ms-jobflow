import { Offer } from "../entities/offer";

export abstract class OfferRepository {
    abstract findUnique(ftid: string) : Promise<Offer>
    abstract create(offer: Offer) : Promise<Offer>
    abstract delete(ftid: string) : Promise<Offer>
    abstract addFavorite(id: number, member_id: number) : Promise<Offer>
    abstract findFavorites(member_id: number) : Promise<Offer[]>
    abstract removeFavorite(id: number, member_id: number) : Promise<Offer>
}