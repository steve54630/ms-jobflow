import { Job_offer } from '@prisma/client-data';
import { prisma } from '../utils/utils';
import axios from 'axios';

/**
 * Création de la liste des offres
 * @param size taille de la liste des offres
 * @returns la liste des offres
 */
export default async function addOffer(token: string): Promise<Job_offer[]> {
  const response = await axios.get(
    'https://api.francetravail.io/partenaire/offresdemploi/v2/offres/search',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const results: any[] = response.data.resultats;

  results.forEach(async(item) => {

    await prisma.job_offer.upsert({
      where: {
        ftid: item.id,
      },
      update: {},
      create: {
        ftid: item.id,
        title: item.intitule,
        description: item.description,
        location : item.lieuTravail.libelle,
        contract_type: item.typeContrat,
        update_ft: item.dateCreation,
        handy_friendly: item.accessibleTH,
        experience_length: item.experienceLibelle,
        salary: item.salaire.libelle ? item.salaire.libelle : 'Non renseigné',
        professional_field: item.appellationlibelle,
        work_time: item.dureeTravailLibelle? item.dureeTravailLibelle : 'Non renseigné',
      },
    });
  });

  const offer = await prisma.job_offer.findMany();
  return offer;
}
