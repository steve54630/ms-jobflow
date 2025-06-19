import {
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { PrismaService } from 'prisma/prisma.service';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ExperienceService {
  constructor(private prisma: PrismaService) {}

  async create(createExperienceDto: CreateExperienceDto, member_id: number) {
    //Erreur si la date de fin est avant la date de debut
    if (createExperienceDto.start_date >= createExperienceDto.end_date) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Start date cannot be after end date',
      });
    }

    // Retourne la formation crée
    return this.prisma.experience.create({
      data: { ...createExperienceDto, member_id },
    });
  }

  async findAll(member_id: number) {
    return await this.prisma.experience.findMany({
      where: { member_id },
    });
  }

  async update(
    id: number,
    updateExperienceDto: UpdateExperienceDto,
    member_id: any,
  ) {
    const { start_date, end_date } = updateExperienceDto;

    if (start_date && end_date && start_date >= end_date) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Start date cannot be after end date',
      });
    }

    const result = await this.prisma.experience.updateMany({
      where: { AND: { id, member_id } },
      data: { ...updateExperienceDto },
    });

    if (result.count === 0) {
      throw new UnauthorizedException();
    }

    return result;
  }

  async remove(id: number, member_id: any) {
    const result = await this.prisma.education.deleteMany({
      where: { AND: { id, member_id } },
    });

    if (result.count === 0) {
      throw new UnauthorizedException();
    }

    return result;
  }
}
