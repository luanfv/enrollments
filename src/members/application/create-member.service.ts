import { Injectable } from '@nestjs/common';
import { MemberAggregate } from '../domain/aggregates/member.aggregate';
import {
  CreateMemberInput,
  CreateMemberOutput,
  ICreateMemberService,
} from './create-member.interface';
import { MembersRepository } from '../infra/databases/members.repository';
import { AlreadyExistsException } from '../domain/exceptions/already-exists.exception';

@Injectable()
export class CreateMemberService implements ICreateMemberService {
  constructor(private readonly membersRepository: MembersRepository) {}

  async execute(
    createMemberDto: CreateMemberInput,
  ): Promise<CreateMemberOutput> {
    const emailExists = await this.membersRepository.existsByEmail(
      createMemberDto.email,
    );
    if (emailExists)
      throw new AlreadyExistsException('Email already used by another member');

    const member = MemberAggregate.create(createMemberDto);
    await this.membersRepository.create(member);
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
