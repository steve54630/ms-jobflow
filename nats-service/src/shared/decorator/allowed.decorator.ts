import { ValidationOptions, registerDecorator, ValidationArguments } from "class-validator";

function IsAllowedField(allowedFields: string[], validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isAllowedField',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // Ici tu vérifies que la valeur est dans allowedFields
          return typeof value === 'string' && allowedFields.includes(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} doit être une clé valide.`;
        },
      },
    });
  };
}

export default IsAllowedField;