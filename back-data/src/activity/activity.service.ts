import {
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}
  async create(createActivityDto: CreateActivityDto, member_id: any) {
    if (createActivityDto.start_date >= createActivityDto.end_date) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Start date cannot be after end date'
      });
    }

    return await this.prisma.activity.create({
      data: { ...createActivityDto, member_id },
    });
  }

  async findAll(member_id: number) {
    return await this.prisma.activity.findMany({
      where: { member_id },
    });
  }

  async findOne(id: number, member_id: any) {
    const result = await this.prisma.activity.findUnique({ where: { id } });

    if (result?.member_id != member_id && result) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Unauthorized'
      });
    }

    return result;
  }

  async update(
    id: number,
    updateActivityDto: UpdateActivityDto,
    member_id: any,
  ) {
    const { start_date, end_date } = updateActivityDto;

    if (start_date && end_date && start_date >= end_date) {
      throw new RpcException({
        code: HttpStatus.UNAUTHORIZED,
        message: 'Start date cannot be after end date'
      });
    }

    const result = await this.prisma.activity.updateMany({
      where: { AND: { id, member_id } },
      data: { ...updateActivityDto },
    });

    if (result.count === 0) {
      throw new UnauthorizedException();
    }

    return result;
  }

  async remove(id: number, member_id: number) {
    const result = await this.prisma.activity.deleteMany({
      where: { AND: { id, member_id } },
    });

    if (result.count === 0) {
      throw new UnauthorizedException();
    }

    return result;
  }
}
