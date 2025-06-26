import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Event as PrismaEvent } from '@prisma/client-data';
import { startOfDay, endOfDay } from 'date-fns';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) { }

  async create(
    createEventDto: CreateEventDto,
    member_id: number
  ): Promise<PrismaEvent> {
    const { end_date, job_offer_id, ...rest } = createEventDto;

    return this.prisma.event.create({
      data: {
        ...rest,
        member_id,
        ...(end_date ? { end_date } : {}),
        ...(job_offer_id ? { job_offer_id } : {}),
      },
    });
  }

  async findAll(
    member_id: number
  ): Promise<PrismaEvent[]> {
    return await this.prisma.event.findMany({
      where: {
        member_id,
        start_date: {
          gte: new Date(), // uniquement les événements futurs ou en cours puisque la new Date() c'est maintenant
        },
      },
      take: 5,
      orderBy: {
        start_date: 'asc', // du plus proche au plus lointain
      },
    });
  }

  async findAllFromDay(
    member_id: number,
    day: string
  ): Promise<PrismaEvent[]> {
    const date = new Date(day);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date parameter');
    }

    return await this.prisma.event.findMany({
      where: {
        member_id,
        start_date: { // récupère les événement du jour, entre 0h00 et 23h59
          gt: startOfDay(date),
          lte: endOfDay(date),
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.event.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateEventDto: UpdateEventDto,
    member_id: number
  ) {
    const event = await this.prisma.event.findFirst({
      where: { id, member_id },
    });

    if (!event) {
      throw new UnauthorizedException();
    }

    return this.prisma.event.update({
      where: { id },
      data: { ...updateEventDto },
    });
  }

  async remove(
    id: number,
    member_id: number
  ) {
    const event = await this.prisma.event.findFirst({
      where: { id, member_id },
    });

    if (!event) {
      throw new UnauthorizedException();
    }
    return this.prisma.event.delete({
      where: { id },
    });
  }
}