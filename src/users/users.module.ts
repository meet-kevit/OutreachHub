import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OutUser , OutUsersSchema } from 'src/schemas/users.schema';
import { UserService } from './users.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:OutUser.name,
        schema:OutUsersSchema,
      },
    ])
  ],
  providers:[UserService],
  controllers:[UsersController]
})
export class UsersModule {}
