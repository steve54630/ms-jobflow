import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { $Enums } from '@prisma/client';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}
  create(createSkillDto: UpdateSkillDto) {
    return this.prisma.skill.upsert({
      where: { title: createSkillDto.title },
      update: {},
      create: { title: createSkillDto.title!, category: 'hard' },
    });
  }

  async findMemberSkills(member_id: number) {
    const member = await this.prisma.member_skill.findMany({
      where: {
        member_id
      },
      include: {
        skill: {
          include: {
            Member_skill: true,
          },
        },
      },
    });

    return !member ? [] : member.map((item) => {
      return {
        id : item.skill.id,
        category: item.skill.category,
        title: item.skill.title
      }
    });
  }

  findAll() {
    return this.prisma.skill.findMany();
  }

  async update(member_id: number, createSkillDto: UpdateSkillDto) {
    const skill = await this.create(createSkillDto);

    return this.prisma.member_skill.create({
      data: {
        member_id,
        skill_id: skill.id,
      },
    });
  }

  async remove(member_id: number, skill_id: number, category: $Enums.Skills) {
    await this.prisma.member_skill.deleteMany({
      where: { skill_id, member_id },
    });

    if (category == 'hard') {

      const skill = await this.prisma.member_skill.findMany({
        where: { skill_id },
      });

      if (skill.length == 0) {
        await this.prisma.skill.delete({
          where: { id: skill_id },
        });
      }
    }
  }
}
