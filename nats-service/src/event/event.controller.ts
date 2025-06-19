import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Request } from 'express';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  /**
   * Crée un nouvel événement
   * @param createEventDto Les informations de l'événement créé
   * @param req La requête avec l'id du membre concerné
   * @returns L'événement créé
   */
  async create(
    @Body() createEventDto: CreateEventDto,
    @Req() req: Request,
  ) {
    return await this.eventService.create(createEventDto, req.user!['sub']);
  }

  @Get('/member')
  /**
   * Renvoie la liste des 5 prochains événements du membre
   * @param req La requête avec l'id du membre concerné
   * @returns La liste demandée
   */
  async findAllFuture(@Req() req: Request) {
    console.log('🚀 ~ EventController ~ findAll ~ req.user:', req.user);
    const memberId = req.user!['sub'];
    return await this.eventService.findAll(memberId);
  }

  @Get('/day/:dayId')
  /**
   * Renvoie la liste des événements du membre pour le jour donné
   * @param req La requête avec l'id du membre concerné
   * @param dayId Le jour voulu
   * @returns La liste demandée
   */
  async findAllFromDay(
    @Param('dayId') dayId: string,
    @Req() req: Request,
  ) {
    const memberId = req.user!['sub'];
    const day = dayId;
    console.log('🚀 ~ EventController ~ findAllFromDay ~ dayId:', dayId);
    return await this.eventService.findAllFromDay(memberId, day);
  }

  @Get('/:eventId')
  /**
   * Renvoie un événement précis
   * @param eventId l'id de l'événement voulu
   * @param req La requête avec l'id du membre concerné
   * @returns l'événement demandé
   */
  async findOne(
    @Param('eventId', ParseIntPipe) id: number,
    @Req() req: Request,
  ) {
    const memberId = req.user!['sub'];
    return await this.eventService.findOne(id);
  }

  @Patch('/:eventId')
  /**
   * Met à jour un événement
   * @param eventId l'id de l'événement voulu
   * @param updateEventDto Les informations de l'événement à changer
   * @param req La requête avec l'id du membre concerné
   * @returns L'événement mis à jour
   */
  async update(
    @Param('eventId', ParseIntPipe) id: number,
    @Body() updateEventDto: UpdateEventDto,
    @Req() req: Request,
  ) {
    return await this.eventService.update(id, updateEventDto, req.user!['sub']);
  }

  @Delete('/:eventId')
  /**
   * Supprime un événement
   * @param eventId l'id de l'événement voulu
   * @param req La requête avec l'id du membre concerné
   * @returns La confirmation de suppression
   */
  async remove(
    @Param('eventId', ParseIntPipe) id: number,
    @Req() req: Request,
  ) {
    return await this.eventService.remove(id, req.user!['sub']);
  }
}
