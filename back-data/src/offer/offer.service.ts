import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OfferService {
  async getToken(): Promise<string> {
    const response = await axios.post(
      'https://entreprise.francetravail.fr/connexion/oauth2/access_token',
      {
        grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        scope: 'api_offresdemploiv2 o2dsoffre',
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          realm: 'partenaire',
        },
      }
    );

    return response.data.access_token;
  }

  async fetchOffers(query: string, page: number) {
    const token = await this.getToken();
    const response = await axios.get(
      'https://api.pole-emploi.io/partenaire/offresdemploi/v2/offres/search',
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          motsCles: query,
          range: `${page * 10}-${page * 10 + 9}`,
        },
      }
    );

    return response.data.resultats.map((o) => ({
      offerId: o.id,
      company: o.entreprise?.nom,
      localisation: o.lieuTravail?.libelle,
      jobTitle: o.intitule,
      jobType: o.typeContratLibelle,
      description: o.description,
    }));

  } catch (error : any) {
    console.error('Erreur lors de l’appel à l’API FT:', error.response?.data || error.message);
    throw error;
  }
}
