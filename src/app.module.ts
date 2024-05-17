import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { SessionSerializer } from './auth/session.serializer';
import { LocalStrategy } from './auth/local.strategy';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nandahoyos',
      password: 'admin',
      database: 'myapp',
      entities: [User],
      synchronize: true, // In production, set this to false
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, SessionSerializer],
})
export class AppModule { }
