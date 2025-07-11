import { Activity } from 'src/domain/entities/activity';
import { ActivityRepository } from 'src/domain/repositories/activity.repository';
import { PrismaService } from '../../prisma.service';
import { ActivityMapper } from 'src/shared/mapper/activity.mapper';

export class ActivityPrisma implements ActivityRepository {
  constructor(readonly prismaService: PrismaService) {}
  async create(activity: Activity): Promise<Activity> {
    const activityCreated = await this.prismaService.activity.create({
      data: ActivityMapper.toPrisma(activity),
    });

    return ActivityMapper.toDomainFromPrisma(activityCreated);
  }

  async findAll(member_id: number): Promise<Activity[]> {
    return (
      await this.prismaService.activity.findMany({ where: { member_id } })
    ).map((activity) => ActivityMapper.toDomainFromPrisma(activity));
  }

  async findUnique(id: number): Promise<Activity | null> {
    const activity = await this.prismaService.activity.findUnique({
      where: { id },
    });

    return activity ? ActivityMapper.toDomainFromPrisma(activity) : null;
  }

  async update(id: number, activity: Activity): Promise<Activity> {
    return ActivityMapper.toDomainFromPrisma(
      await this.prismaService.activity.update({
        where: { id },
        data: ActivityMapper.toPrisma(activity),
      }),
    );
  }

  async remove(id: number): Promise<{ count: number }> {
    return await this.prismaService.activity.deleteMany({ where: { id } });
  }
}
