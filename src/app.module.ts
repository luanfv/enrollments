import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppDataSource from './data-source';
import { MembersModule } from './members/members.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), MembersModule],
})
export class AppModule {}
