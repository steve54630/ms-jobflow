import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Profile } from '@prisma/client-data';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async create(
    createProfileDto: CreateProfileDto,
    member_id: number
  ): Promise<Profile> {
    return await this.prisma.profile.upsert({
      where: { member_id },
      update: { ...createProfileDto },
      create: { ...createProfileDto, member_id },
    });
  }

  async find(member_id: number): Promise<Profile | null> {
    return await this.prisma.profile.findUnique({
      where: { member_id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
