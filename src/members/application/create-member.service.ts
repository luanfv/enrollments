import { Injectable } from '@nestjs/common';
import { MemberAggregate } from '../domain/member.aggregate';
import {
  CreateMemberInput,
  CreateMemberOutput,
  ICreateMemberService,
} from './create-member.interface';

@Injectable()
export class CreateMemberService implements ICreateMemberService {
  async execute(
    createMemberDto: CreateMemberInput,
  ): Promise<CreateMemberOutput> {
    const member = MemberAggregate.create(createMemberDto);
    return new CreateMemberOutput(
      member.id,
      member.name,
      member.email,
      member.birthdate,
      member.gender,
      member.createdAt,
    );
  }
}
