import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { Lang } from './entities/lang.entity';

@Injectable()
export class LangService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Lang[]> {
    return await this.prisma.langue.findMany();
  }

  async create(createLangDto: CreateLangDto, sub: number) {
    return this.prisma.member_langue.create({
      data: { langue_id: createLangDto.id, member_id: sub },
    });
  }

  async findMemberLang(member_id: number): Promise<Lang[]> {
    const member = await this.prisma.member_langue.findMany({
      where: {
        member_id,
      },
      include: {
        langue: {
          include: {
            Member_langue: true,
          },
        },
      },
    });

    return !member
      ? []
      : member.map((entry) => ({
          id: entry.langue.id,
          title: entry.langue.title,
        }));
  }

  remove(langue_id: number, member_id: number) {
    return this.prisma.member_langue.deleteMany({
      where: { AND: { langue_id, member_id } },
    });
  }
}
