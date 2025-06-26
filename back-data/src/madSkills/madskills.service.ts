import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { $Enums } from '@prisma/client-data';
import { CreateMadSkillDto } from './dto/create-madskill.dto';

@Injectable()
export class MadSkillsService {
  constructor(private prisma: PrismaService) {}
  create(createSkillDto: CreateMadSkillDto, member_id: number) {
    return this.prisma.mad_skill.create({
      data: {
        title: createSkillDto.title!,
        category: createSkillDto.category!,
        member_id,
      },
    });
  }

  async findMemberMadSkills(member_id: number) {
    return this.prisma.mad_skill.findMany({
      where: {
        member_id,
      },
    });
  }

  findAll() {
    return this.prisma.mad_skill.findMany();
  }

  async remove(member_id: number, skill_id: number) {
    return this.prisma.mad_skill.deleteMany({
      where: {
        id: skill_id,
        member_id,
      },
    })
  }
}
