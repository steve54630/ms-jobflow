import { getMetadataStorage } from "class-validator";

function extractKeys(dtoClass: Function, prefix = ''): string[] {
  // Récupérer toutes les métadonnées des propriétés validées
  const metadata = getMetadataStorage();

  // Filtrer les métadonnées pour celles qui appartiennent à la classe passée en argument
  const properties = metadata.getTargetValidationMetadatas(
    dtoClass,
    '',
    false,
    false
  );

  // Extraire uniquement les noms uniques de propriétés
  const keys = [...new Set(properties.map((meta) => meta.propertyName))];

  const result: string[] = [];

  for (const key of keys) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    // Vérifier si la propriété a un décorateur ValidateNested (donc objet imbriqué)
    const hasNested = properties.some(
      meta => meta.propertyName === key && meta.type === 'nestedValidation'
    );

    if (hasNested) {
      // Récupérer le type de la propriété via reflect-metadata
      const type = Reflect.getMetadata('design:type', dtoClass.prototype, key);
      if (type && typeof type === 'function') {
        result.push(...extractKeys(type, fullKey));
      } else {
        result.push(fullKey);
      }
    } else {
      result.push(fullKey);
    }
  }

  return result;

}

export default extractKeys;