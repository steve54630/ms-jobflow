import { Member, prisma } from './utils/utils';
import createMembers from './members/profile';
import addEducationToMembers from './members/education';
import addExperienceToMembers from './members/experience';
import addOffer from './offers/offer';
import createSkill from './skills/skill';
import addJobSearchToMembers from './members/jobSearch';
import createActivity from './members/activity';
import createEvent from './event';
import createLangue from './skills/langue';
import createMadSkill from './members/madSkill';
import addLangueToMembers from './members/langues';
import addSkillToMembers from './members/skill';
import createToken from './ft_api/token';

async function main() {
  
  const members : Member[]= require('@shared/members.json')

  //Récupération du token de FranceTravail
  const token = await createToken();

  //Création de membres aléatoires
  await createMembers(members);

  //Création d'offres d'emploi aléatoires
  const offers = await addOffer(token);

  //Création d'une liste générale de skills
  const skills = await createSkill(members.length);

  //Création d'une liste générale de langues
  const langues = await createLangue(20, token);

  //Ajout de formations aléatoires
  await addEducationToMembers(members);

  //Ajout d'expériences aléatoires avec au moins 1 par membre
  await addExperienceToMembers(members);

  //Création d'une liste d'activités
  await createActivity(members);

  //Création d'une liste de mad skills (intérêts et loisirs)
  await createMadSkill(members, 120);

  //Ajout de skills à la liste d'un utilisateur
  await addSkillToMembers(members, skills);

  //Ajout de langues à la liste d'un utilisateur
  await addLangueToMembers(members, langues);

  //Création d'événements aléatoires
  await createEvent(members, offers);

  //Ajout d'offres enregistrées
  await addJobSearchToMembers(members);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
