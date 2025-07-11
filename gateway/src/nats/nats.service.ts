import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

export class NatsService {
  constructor(@Inject('NATS') private readonly client: ClientProxy) {}

  async send(subject: string, data: any): Promise<any> {
    return firstValueFrom(this.client.send(subject, data));
  }
  async emit(subject: string, data: any): Promise<void> {
    this.client.emit(subject, data);
  }
}
