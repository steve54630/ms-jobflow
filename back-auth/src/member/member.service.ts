import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { Member } from '@prisma/client-data';
import 'argon2';
import { hash, verify } from 'argon2';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class MemberService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const hashPassword = await hash(createMemberDto.password);

    return await this.prisma.member.create({
      data: {
        username: createMemberDto.username,
        email: createMemberDto.email,
        password: hashPassword,
      },
    });
  }

  async findMany<K extends keyof Member>(
    key: K,
    value: Member[K]
  ): Promise<Member[]> {
    return await this.prisma.member.findMany({
      where: { [key]: value },
    });
  }

  async findOne<K extends keyof Member>(
    key: K,
    value: Member[K]
  ): Promise<Member | null> {
    const response = await this.prisma.member.findFirstOrThrow({
      where: { [key]: value },
    });
    return response;
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    
    const dataToUpdate = updateMemberDto;

    if (updateMemberDto.past_password) {
      const member = await this.findOne('id', id);
      if (member && member.password) {
        await verify(member.password, updateMemberDto.past_password).catch(
          () => {
            throw new RpcException({
              code: HttpStatus.UNAUTHORIZED,
              message: 'Mot de passe incorrect',
            })
          }
        );
        dataToUpdate.password = await hash(updateMemberDto.password!);
      }
    }

    return await this.prisma.member.update({
      where: { id },
      data: {
        ...dataToUpdate,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.member.delete({
      where: { id },
    });
  }
}
