import { Candidacy } from 'src/domain/entities/candidacy';
import { CandidacyRepository } from 'src/domain/repositories/candidacy.repository';
import { PrismaService } from '../../prisma.service';
import { StatusMapper } from 'src/shared/mapper/candidacy/status.mapper';
import { CandidacyMapper } from 'src/shared/mapper/candidacy/candidacy.mapper';

export class CandidacyPrisma implements CandidacyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(candidacy: Candidacy): Promise<Candidacy> {

    const candidacyCreated = await this.prismaService.candidacy.create({
      data: { ...candidacy, status: StatusMapper.toPrisma(candidacy.status!) },
    });
    return CandidacyMapper.toDomainFromPrisma(candidacyCreated);

  }

  async findAll(member_id: number): Promise<Candidacy[]> {
    const candidacies = await this.prismaService.candidacy.findMany({
      where: { member_id },
    });

    return candidacies.map((candidacy) => CandidacyMapper.toDomainFromPrisma(candidacy));
  }

  async findUnique(
    cv_id: string,
    job_offer_id: number,
  ): Promise<Candidacy | null> {
    const candidacy = await this.prismaService.candidacy.findUnique({
      where: { cv_id_job_offer_id: { job_offer_id, cv_id } },
    });
    if (!candidacy) return null;

    return CandidacyMapper.toDomainFromPrisma(candidacy);
  }
}
