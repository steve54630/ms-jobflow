import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from '@prisma/client';
import { MessagePattern, Payload } from '@nestjs/microservices';

export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  /**
   * Crée un nouveau membre
   * @param createMemberDto Les données du membre à créer
   * @return Le membre créé
   **/
  @MessagePattern('member.create')
  async create(@Payload() createMemberDto: CreateMemberDto): Promise<Member> {
    return await this.memberService.create(createMemberDto);
  }

  @MessagePattern('member.find')
  async findOne(@Payload() { id }: { id: number }) {
    console.log(new Date());
    return await this.memberService.findOne('id', id);
  }

  /**
   * Récupere tous les membres
   * @returns La liste de tous les membres
   */
  @MessagePattern('member.update')
  async update(
    @Payload() { id, ...updateMemberDto }: UpdateMemberDto & { id: number },
  ) {
    return await this.memberService.update(id, updateMemberDto);
  }

  /**
   * Supprime un membre par son id
   * @param id L'identifiant du membre à supprimer
   * @returns Le membre supprimé
   */
  @MessagePattern('member.remove')
  async remove(@Payload() { id }: { id: number }) {
    return await this.memberService.remove(id);
  }
}
