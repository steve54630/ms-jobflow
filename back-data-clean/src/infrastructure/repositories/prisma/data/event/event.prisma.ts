import { EventRepository } from 'src/domain/repositories/event.repository';
import { PrismaService } from '../../prisma.service';
import { Event } from 'src/domain/entities/event';
import { r } from '@faker-js/faker/dist/airline-BUL6NtOJ';
import { EventMapper } from 'src/shared/mapper/event.mapper';

export class EventPrisma implements EventRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(event: Event): Promise<Event> {
    return await this.prismaService.event.create({
      data: EventMapper.toPrisma(event),
    });
  }

  async findAll(member_id: number): Promise<Event[]> {
    return (
      await this.prismaService.event.findMany({ where: { member_id } })
    ).map((event) => EventMapper.toDomainFromPrisma(event));
  }

  async findUnique(id: number): Promise<Event | null> {
    const event = await this.prismaService.event.findUnique({ where: { id } });

    return event ? EventMapper.toDomainFromPrisma(event) : null;
  }

  async update(id: number, event: Event): Promise<Event> {
    return EventMapper.toDomainFromPrisma(
      await this.prismaService.event.update({ where: { id }, data: event }),
    );
  }

  async remove(id: number): Promise<Event> {
    return EventMapper.toDomainFromPrisma(
      await this.prismaService.event.delete({ where: { id } }),
    );
  }
}
