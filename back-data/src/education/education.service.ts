import {
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Education } from './entities/education.entity';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async create(createEducationDto: CreateEducationDto, member_id: number) : Promise<Education> {
    //Erreur si la date de fin est avant la date de debut
    if (createEducationDto.start_date >= createEducationDto.end_date) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Start date cannot be after end date'
      });
    }

    // Retourne la formation crée
    return this.prisma.education.create({
      data: { ...createEducationDto, member_id },
    });
  }

  async findAll(member_id: number) : Promise<Education[]> {
    return await this.prisma.education.findMany({
      where: { member_id },
    });
  }

  async update(
    id: number,
    updateEducationDto: UpdateEducationDto,
    member_id: number
  ) {
    const { start_date, end_date } = updateEducationDto;

    if (start_date && end_date && start_date >= end_date) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Start date cannot be after end date'
      });
    }

    const result = await this.prisma.education.updateMany({
      where: { AND: { id, member_id } },
      data: { ...updateEducationDto },
    });

    if (result.count === 0) {
      throw new UnauthorizedException();
    }

    return result;
  }

  /**
   * Supprime une formation existante
   * @param id L'ID de la formation à supprimer
   * @param member_id L'ID du membre qui poss?de la formation
   * @returns La formation supprim?e
   * @throws UnauthorizedException si la formation n'existe pas ou que le membre n'est pas propri?taire de la formation
   */
  async remove(id: number, member_id: number) {
    const result = await this.prisma.education.deleteMany({
      where: { AND: { id, member_id } },
    });

    if (result.count === 0) {
      throw new UnauthorizedException();
    }

    return result;
  }
}
