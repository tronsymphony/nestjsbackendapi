// src/auth/session.serializer.ts
import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: User, done: Function): void {
    done(null, user.id);
  }

  async deserializeUser(id: number, done: Function) {
    const user = await this.usersService.findOneById(id);
    done(null, user);
  }
}
