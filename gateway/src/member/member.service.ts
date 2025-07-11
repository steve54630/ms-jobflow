import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { NatsService } from 'src/nats/nats.service';

@Injectable()
export class MemberService {
  constructor(private readonly natsService: NatsService) {}

  async remove(id: number) {
    return await this.natsService.send('member.remove', { id });
  }
  async update(id: number, updateMemberDto: UpdateMemberDto) {
    return await this.natsService.send('member.update', {
      id,
      updateMemberDto,
    });
  }
  async findOne(id: number) {
    return await this.natsService.send('member.findOne', { id });
  }
  async create(createMemberDto: CreateMemberDto) {
    return await this.natsService.send('member.create', { createMemberDto });
  }
}
