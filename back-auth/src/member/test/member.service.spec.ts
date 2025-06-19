import { faker } from '@faker-js/faker/.';
import { PrismaService } from '../../../prisma/prisma.service';
import { MemberService } from '../member.service';
import { Test, TestingModule } from '@nestjs/testing';
import { hash } from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

jest.mock('argon2', () => ({
  hash: jest.fn().mockResolvedValue('hashedPassword'),
  verify: jest.fn().mockResolvedValue(true),
}));

describe('MemberService', () => {
  let service: MemberService;

  const mockPrismaService = {
    member: {
      create: jest.fn(),
      findMany: jest.fn(),
      findFirstOrThrow: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MemberService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<MemberService>(MemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('should create method', () => {
    it('should be called', async () => {
      const member = {
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      };

      const prismaResponse = {
        id: faker.number.int(),
        createdAt: faker.date.past(),
        updatedAt: null,
        password: await hash(member.password),
        username: member.username,
        email: member.email,
      };
      mockPrismaService.member.create.mockResolvedValue(prismaResponse);

      const result = await service.create(member);

      expect(result).toEqual(prismaResponse);
      expect(mockPrismaService.member.create).toHaveBeenCalledWith({
        data: {
          username: member.username,
          email: member.email,
          password: 'hashedPassword',
        },
      });
      expect(mockPrismaService.member.create).toHaveBeenCalledTimes(1);
    });
  });

  it('should throw if prisma fails', async () => {
    const member = {
      username: faker.internet.username(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const error = new PrismaClientKnownRequestError(
      'Unique constraint failed on the fields: (`email`)',
      {
        code: 'P2002',
        clientVersion: '4.0.0',
      }
    );

    mockPrismaService.member.create.mockRejectedValue(error);

    await expect(service.create(member)).rejects.toThrow(error);
  });

  describe('findAll method', () => {
    it('Should find all members', async () => {
      const members = [
        {
          username: faker.internet.username(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          createdAt: new Date('2025-01-01T00:00:00.000Z'),
        },
        {
          username: faker.internet.username(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          createdAt: new Date('2025-01-01T00:00:00.000Z'),
        },
        {
          username: faker.internet.username(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          createdAt: new Date('2025-01-01T00:00:00.000Z'),
        },
      ];

      mockPrismaService.member.findMany.mockResolvedValue(members);

      const result = await service.findMany(
        'created_at',
        new Date('2025-01-01T00:00:00.000Z')
      );

      expect(result).toEqual(members);
      expect(mockPrismaService.member.findMany).toHaveBeenCalledTimes(1);
      expect(mockPrismaService.member.findMany).toHaveBeenCalledWith({
        where: { created_at: new Date('2025-01-01T00:00:00.000Z') },
      });
    });
  });

  describe('findOne method', () => {
    it('Should find one member', async () => {
      const member = {
        id: faker.number.int(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date('2025-01-01T00:00:00.000Z'),
      };

      mockPrismaService.member.findFirstOrThrow.mockResolvedValue(member);

      const result = await service.findOne('id', member.id);

      expect(result).toEqual(member);
      expect(mockPrismaService.member.findFirstOrThrow).toHaveBeenCalledTimes(
        1
      );
      expect(mockPrismaService.member.findFirstOrThrow).toHaveBeenCalledWith({
        where: { id: member.id },
      });
    });
  });

  describe('update method', () => {
    it('Should update one member', async () => {
      const username = faker.internet.username();

      const member = {
        id: 1,
        username: username,
        email: faker.internet.email(),
        password: faker.internet.password(),
      };

      mockPrismaService.member.update.mockResolvedValue(member);

      const result = await service.update(1, { username: username });

      expect(result).toEqual(member);
      expect(mockPrismaService.member.update).toHaveBeenCalledTimes(1);
      expect(mockPrismaService.member.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { username: username },
      });
    });
  });
});
