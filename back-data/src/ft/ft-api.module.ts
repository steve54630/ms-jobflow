import { Module } from "@nestjs/common";
import { FtApiController } from "./ft-api.controller";
import { FtApiService } from "./ft-api.service";

@Module({
    controllers: [FtApiController],
    providers: [FtApiService], 
})
export class FtApiModule {}