import { MessagePattern, Payload } from "@nestjs/microservices";
import { FtApiService } from "./ft-api.service";
import { Controller } from "@nestjs/common";

@Controller()
export class FtApiController {

    constructor(private readonly ftApiService: FtApiService) {}

    @MessagePattern('offers.getall')
      async getOffers(
        @Payload() { query, page }: { query: string; page: number },
      ) {
        console.log("🚀 ~ FtApiService ~ getOffers ~ query:", page)
    
        return this.ftApiService.fetchOffers(query, page);
      }

      

}