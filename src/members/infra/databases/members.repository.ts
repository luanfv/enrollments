import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MembersEntity } from './members.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberAggregate } from '../../domain/aggregates/member.aggregate';
import { MembersMapper } from './members.mapper';

@Injectable()
export class MembersRepository {
  constructor(
    @InjectRepository(MembersEntity)
    private readonly repo: Repository<MembersEntity>,
  ) {}

  async create(member: MemberAggregate): Promise<void> {
    const entity = MembersMapper.toEntity(member);
    await this.repo.save(entity);
  }

  async existsByEmail(email: string): Promise<boolean> {
    const member = await this.repo.findOne({ where: { email } });
    return !!member;
  }
}
