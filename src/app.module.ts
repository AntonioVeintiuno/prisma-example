import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma-service/prisma.service';
import { UserService } from './user/user.service';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development.local', '.env.development', '.env'],
  })],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
