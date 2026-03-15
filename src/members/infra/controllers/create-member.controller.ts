import { Body, Controller, Post } from '@nestjs/common';
import { CreateMemberService } from '../../application/create-member.service';
import { CreateMemberInput } from '../../application/create-member.interface';
import { CreateMemberDto } from './dtos/create-member.dto';

@Controller('members')
export class CreateMemberController {
  constructor(private readonly createMemberService: CreateMemberService) {}

  @Post()
  async execute(@Body() createMemberDto: CreateMemberDto) {
    const input = new CreateMemberInput({
      name: createMemberDto.name,
      email: createMemberDto.email,
      birthdate: createMemberDto.birthdate,
      gender: createMemberDto.gender,
    });
    const member = await this.createMemberService.execute(input);
    return member;
  }
}
