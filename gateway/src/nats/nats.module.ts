import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NatsService } from './nats.service';

@Global()
@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'NATS',
                transport: Transport.NATS,
                options: {
                    servers: ['nats://localhost:4222'],
                },
            }
        ])
    ],
    providers: [NatsService],
    exports: [NatsService]
})
export class NatsModule {

}
