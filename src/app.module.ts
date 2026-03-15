import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import AppDataSource from './data-source';
import { MembersModule } from './members/members.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), MembersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
