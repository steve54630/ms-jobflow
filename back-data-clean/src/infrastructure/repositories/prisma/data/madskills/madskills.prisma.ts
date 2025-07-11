import { MadSkill } from 'src/domain/entities/madskills';
import { MadSkillRepository } from 'src/domain/repositories/madskills.repository';
import { MadSkillMapper } from 'src/shared/mapper/mad_skills/madskill.mapper';
import { PrismaService } from '../../prisma.service';

export class MadSkillPrisma implements MadSkillRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll(member_id: number): Promise<MadSkill[]> {
    const madskills = await this.prismaService.mad_skill.findMany({
      where: { member_id },
    });
    return madskills.map((ms) => MadSkillMapper.toDomainFromPrisma(ms));
  }

  async add(madskill: MadSkill, member_id: number): Promise<MadSkill> {
    const mad_skill = await this.prismaService.mad_skill.create({
      data: {
        ...MadSkillMapper.toPrisma(madskill, member_id),
      },
    });

    return MadSkillMapper.toDomainFromPrisma(mad_skill);
  }

  async remove(madskill_id: number): Promise<MadSkill> {
    const madskill = await this.prismaService.mad_skill.delete({
      where: {
        id: madskill_id,
      },
    });

    return MadSkillMapper.toDomainFromPrisma(madskill);
  }
}
