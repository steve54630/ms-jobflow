import { Controller } from '@nestjs/common';
import { CreateEventDto } from 'src/event/dto/create-event.dto';
import { UpdateEventDto } from 'src/event/dto/update-event.dto';
import { EventService } from 'src/event/event.service';
import { Event as PrismaEvent } from '@prisma/client';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @MessagePattern('events.create')
  /**
   * Crée un nouvel événement
   * @param createEventDto Les informations de l'événement créé
   * @param req La requête avec l'id du membre concerné
   * @returns L'événement créé
   */
  async create(
    @Payload() { sub, ...createEventDto }: CreateEventDto & { sub: number },
  ): Promise<PrismaEvent> {
    return await this.eventService.create(createEventDto, sub);
  }

  @MessagePattern('events.findAllFuture')
  /**
   * Renvoie la liste des 5 prochains événements du membre
   * @param req La requête avec l'id du membre concerné
   * @returns La liste demandée
   */
  async findAllFuture(
    @Payload() { id }: { id: number },
  ): Promise<PrismaEvent[]> {
    return await this.eventService.findAll(id);
  }

  @MessagePattern('events.findAllFromDay')
  /**
   * Renvoie la liste des événements du membre pour le jour donné
   * @param req La requête avec l'id du membre concerné
   * @param dayId Le jour voulu
   * @returns La liste demandée
   */
  async findAllFromDay(
    @Payload() { id, day }: { id: number; day: string },
  ): Promise<PrismaEvent[]> {
    return await this.eventService.findAllFromDay(id, day);
  }

  @MessagePattern('events.findOne')
  /**
   * Renvoie un événement précis
   * @param eventId l'id de l'événement voulu
   * @param req La requête avec l'id du membre concerné
   * @returns l'événement demandé
   */
  async findOne(
    @Payload() { id }: { id: number },
  ): Promise<PrismaEvent | null> {
    return await this.eventService.findOne(id);
  }

  @MessagePattern('events.update')
  /**
   * Met à jour un événement
   * @param eventId l'id de l'événement voulu
   * @param updateEventDto Les informations de l'événement à changer
   * @param req La requête avec l'id du membre concerné
   * @returns L'événement mis à jour
   */
  async update(
    @Payload()
    {
      id,
      sub,
      ...updateEventDto
    }: UpdateEventDto & { id: number; sub: number },
  ): Promise<PrismaEvent> {
    return await this.eventService.update(id, updateEventDto, sub);
  }

  @MessagePattern('events.remove')
  /**
   * Supprime un événement
   * @param eventId l'id de l'événement voulu
   * @param req La requête avec l'id du membre concerné
   * @returns La confirmation de suppression
   */
  async remove(@Payload() { id, sub }: { id: number; sub: number }) {
    return await this.eventService.remove(id, sub);
  }
}
