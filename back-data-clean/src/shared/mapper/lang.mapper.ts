import { Langue } from "@prisma/client-data";
import { LangueOutputDto } from "../dto/lang/output-lang.dto";

export class LangMapper {
    toDto(lang: Langue): LangueOutputDto {
        return {
            id: lang.id,
            title: lang.title,
        };
    }

}