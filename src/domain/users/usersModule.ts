import { Module } from '@nestjs/common';
import { UserService } from '@app/domain/users/service/userService';
import { UsersController } from '@app/action/users/usersController';

@Module({
  providers: [UserService],
  controllers: [UsersController],
})
export class UsersModule {}
