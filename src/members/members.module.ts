import { Module } from '@nestjs/common';
import { CreateMemberController } from './infra/controllers/create-member.controller';
import { CreateMemberService } from './application/create-member.service';
import { MembersRepository } from './infra/databases/members.repository';
import { MembersEntity } from './infra/databases/members.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MembersEntity])],
  controllers: [CreateMemberController],
  providers: [CreateMemberService, MembersRepository],
})
export class MembersModule {}
