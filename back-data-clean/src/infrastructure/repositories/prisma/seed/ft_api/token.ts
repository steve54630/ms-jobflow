import axios from "axios";

export default async function createToken() : Promise<string> {
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
            'realm' : "partenaire",
          }
        }
      );
  
      const access_token = response.data.access_token;

      return access_token
}