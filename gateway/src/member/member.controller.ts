import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { Public } from 'src/shared/decorator/public.decorator';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  /**
   * Crée un nouveau membre
   * @param createMemberDto Les données du membre à créer
   * @return Le membre créé
   **/
  async create(@Body() createMemberDto: CreateMemberDto) : Promise<Member> {
    return await this.memberService.create(createMemberDto);
  }

  @Get(':memberId')
  @Public()
  async findOne(@Param('memberId', ParseIntPipe) id : number) {
    console.log(new Date());
    return await this.memberService.findOne(id)
  }

  /**
   * Récupere tous les membres
   * @returns La liste de tous les membres
   */
  @Patch(':memberId')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMemberDto: UpdateMemberDto
  ) {
    return await this.memberService.update(id, updateMemberDto);
  }
 
  @Delete(':memberId')
  @HttpCode(HttpStatus.NO_CONTENT)
  /**
   * Supprime un membre par son id
   * @param id L'identifiant du membre à supprimer
   * @returns Le membre supprimé
   */
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.memberService.remove(id);
  }
}
