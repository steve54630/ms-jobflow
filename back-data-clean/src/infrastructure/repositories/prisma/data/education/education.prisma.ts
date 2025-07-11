import { Education } from 'src/domain/entities/education';
import { EducationRepository } from 'src/domain/repositories/education.repository';
import { PrismaService } from '../../prisma.service';
import { EducationMapper } from 'src/shared/mapper/education.mapper';

export class EducationPrisma implements EducationRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(education: Education): Promise<Education> {
    return EducationMapper.toDomainFromPrisma(
      await this.prismaService.education.create({
        data: EducationMapper.toPrisma(education),
      }),
    );
  }

  async findAll(member_id: number): Promise<Education[]> {
    return (
      await this.prismaService.education.findMany({ where: { member_id } })
    ).map((education) => EducationMapper.toDomainFromPrisma(education));
  }

  async findUnique(id: number): Promise<Education | null> {
    const education = await this.prismaService.education.findUnique({
      where: { id },
    });

    return education ? EducationMapper.toDomainFromPrisma(education) : null;
  }

  async update(id: number, education: Education): Promise<Education> {
    return EducationMapper.toDomainFromPrisma(
      await this.prismaService.education.update({
        where: { id },
        data: EducationMapper.toPrisma(education),
      }),
    );
  }

  async remove(id: number): Promise<Education> {
    return EducationMapper.toDomainFromPrisma(
      await this.prismaService.education.delete({ where: { id } }),
    );
  }
}
