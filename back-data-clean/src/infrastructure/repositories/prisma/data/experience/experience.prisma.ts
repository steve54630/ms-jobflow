import { Experience } from 'src/domain/entities/experience';
import { ExperienceRepository } from 'src/domain/repositories/experience.repository';
import { PrismaService } from '../../prisma.service';
import { ExperienceMapper } from 'src/shared/mapper/experience.mapper';

export class ExperiencePrisma implements ExperienceRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(experience: Experience): Promise<Experience> {
    const experienceCreated = await this.prismaService.experience.create({
      data: ExperienceMapper.toPrisma(experience),
    });

    return ExperienceMapper.toDomainFromPrisma(experienceCreated);
  }
  async findAll(member_id: number): Promise<Experience[]> {
    return (
      await this.prismaService.experience.findMany({ where: { member_id } })
    ).map((experience) => ExperienceMapper.toDomainFromPrisma(experience));
  }
  async findUnique(id: number): Promise<Experience | null> {
    const experience = await this.prismaService.experience.findUnique({
      where: { id },
    });

    return experience ? ExperienceMapper.toDomainFromPrisma(experience) : null;
  }
  async update(id: number, experience: Experience): Promise<Experience> {
    const experienceUpdated = await this.prismaService.experience.update({
      where: { id },
      data: ExperienceMapper.toPrisma(experience),
    });

    return ExperienceMapper.toDomainFromPrisma(experienceUpdated);
  }
  
  async delete(id: number): Promise<Experience> {
    return ExperienceMapper.toDomainFromPrisma(
      await this.prismaService.experience.delete({ where: { id } }),
    );
  }
}
