import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FtApiService {
  private readonly logger = new Logger(FtApiService.name);

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
        params: { realm: 'partenaire' },
      }
    );

    console.log("🚀 ~ FtApiService ~ getToken ~ response:", response.data)

    return response.data.access_token;
  }

  async fetchOffers(query: string, page: number) {
    const token = await this.getToken();

    const response = await axios.get(
      'https://api.francetravail.io/partenaire/offresdemploi/v2/offres/search',
      {
        // headers: { Authorization: `Bearer ${token}` },
        params: {
          motsCles: query,
          range: `${page * 10}-${page * 10 + 9}`,
        },
      }
    );

    return response.data.resultats.map((ftOffer) => ({
      offerId: ftOffer.id,
      company: ftOffer.entreprise?.nom,
      localisation: ftOffer.lieuTravail?.libelle,
      jobTitle: ftOffer.intitule,
      jobType: ftOffer.typeContratLibelle,
      description: ftOffer.description,
    }));
  }

  async fetchOfferByFtid(ftid: string) {
    const token = await this.getToken();

    const response = await axios.get(
      `https://api.francetravail.io/partenaire/offresdemploi/v2/offres/${ftid}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const ftOffer = response.data;

    return {
      offerId: ftOffer.id,
      company: ftOffer.entreprise?.nom,
      localisation: ftOffer.lieuTravail?.libelle,
      jobTitle: ftOffer.intitule,
      contractType: ftOffer.typeContratLibelle,
      experienceLength: ftOffer.experienceLibelle,
      professionalField: ftOffer.domaineLibelle,
      workTime: ftOffer.dureeTravailLibelle,
      salary: ftOffer.salaire?.libelle,
      handyFriendly: ftOffer.accessibleTH,
      description: ftOffer.description,
      updateFt: ftOffer.dateActualisation,
    };
  }
}
