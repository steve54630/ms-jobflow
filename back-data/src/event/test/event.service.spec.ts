import { Test, TestingModule } from '@nestjs/testing';
import { EventService } from '../event.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { faker } from "@faker-js/faker"
import { CreateEventDto } from '../dto/create-event.dto';

describe('EventService', () => {
  let service: EventService;

  const mockPrismaService = {
    event: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      // update: jest.fn(),
      // delete: jest.fn(),
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        }
      ],
    }).compile();

    service = module.get<EventService>(EventService);
    mockPrismaService.event.create.mockClear();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create method', () => {
    it('Should create an event', async () => {
      const start_date = faker.date.future();
      const member_id = faker.number.int();

      const mockEvent: CreateEventDto = {
        member_id: member_id,
        title: faker.lorem.words(3),
        start_date: start_date,
        end_date: faker.date.future({ refDate: start_date }),
        description: faker.lorem.lines(1),
        location: faker.lorem.word(),
        job_offer_id: faker.number.int(),
      }
      const prismaResponse = {
        id: faker.number.int(),
        createdAt: new Date(),
        updatedAt: null,
        ...mockEvent
      }
      mockPrismaService.event.create.mockResolvedValue(prismaResponse)
      const result = await service.create(mockEvent, member_id)

      expect(result).toEqual(prismaResponse)
      expect(mockPrismaService.event.create).toHaveBeenCalledTimes(1) // la fonction de création doit être appelée une seule fois ! (pas de doublon)
      expect(mockPrismaService.event.create).toHaveBeenCalledWith({
        data: {
          member_id: mockEvent.member_id,
          title: mockEvent.title,
          start_date: mockEvent.start_date,
          end_date: mockEvent.end_date,
          description: mockEvent.description,
          location: mockEvent.location,
          job_offer_id: mockEvent.job_offer_id,
        }
      })
    })

    it('Should throw an error on event creation', async () => {
      const start_date = faker.date.future();
      const member_id = faker.number.int();

      const mockEvent = {
        member_id: member_id,
        title: faker.lorem.words(3),
        start_date: start_date,
        end_date: faker.date.future({ refDate: start_date }),
        description: faker.lorem.lines(1),
        location: faker.lorem.word(),
        job_offer_id: faker.number.int(),
      }
      const error = new Error("member doesn't exist");
      mockPrismaService.event.create.mockRejectedValue(error)
      await expect(service.create(mockEvent, member_id)).rejects.toThrow(error);
    })
  })
  describe('findAll method', () => {
    it('Should return events in the future', async () => {
      const member_id = 1;

      const mockEvents = [
        {
          id: 2,
          member_id: member_id,
          title: 'Future Event 1',
          start_date: new Date('2026-01-01'), // Événement futur
          end_date: new Date('2026-01-02'),
          description: 'Future event description',
          location: 'London',
          job_offer_id: 102,
        },
        {
          id: 3,
          member_id: member_id,
          title: 'Future Event 2',
          start_date: new Date('2026-06-01'), // Autre événement futur
          end_date: new Date('2026-06-02'),
          description: 'Another future event',
          location: 'New York',
          job_offer_id: 103,
        },
      ];

      mockPrismaService.event.findMany.mockResolvedValue(mockEvents);
      const result = await service.findAll(member_id);
      console.log("Résultat des événements filtrés:", result);
      expect(result.length).toBe(2); // Vérifie qu'on a bien 2 événements futurs
      expect(result[0].start_date.getTime()).toBeLessThan(result[1].start_date.getTime()); // Vérifie que les événements sont triés par date
      expect(mockPrismaService.event.findMany).toHaveBeenCalledTimes(1);
      expect(mockPrismaService.event.findMany).toHaveBeenCalledWith({
        where: {
          member_id,
          start_date: {
            gte: new Date(),
          },
        },
        take: 5,
        orderBy: {
          start_date: 'asc',
        },
      });
    })

  })
});
