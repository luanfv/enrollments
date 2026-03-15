import { Module } from '@nestjs/common';
import { CreateMemberController } from './infra/controllers/create-member.controller';
import { CreateMemberService } from './application/create-member.service';

@Module({
  imports: [],
  controllers: [CreateMemberController],
  providers: [CreateMemberService],
})
export class MembersModule {}
