import { Langue } from 'src/domain/entities/lang';
import { LangRepository } from 'src/domain/repositories/lang.repository';
import { PrismaService } from '../../prisma.service';

export class LangPrisma implements LangRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Langue[]> {
    return this.prisma.langue.findMany();
  }
  async addLang(
    langue: Langue,
    member_id: number,
  ): Promise<{ member_id: number; langue_id: number }> {
    return this.prisma.member_langue.create({
      data: { member_id, langue_id: langue.id },
    });
  }

  async removeLang(
    langue_id: number,
    member_id: number,
  ): Promise<{ member_id: number; langue_id: number }> {
    return this.prisma.member_langue.delete({
      where: { member_id_langue_id: { member_id, langue_id: langue_id } },
    });
  }

  async findMemberLang(member_id: number): Promise<Langue[]> {
    const langMember = await this.prisma.member_langue.findMany({
      where: { member_id },
      include: { langue: true },
    })

    return langMember.map((lang) => lang.langue);
  }
}
