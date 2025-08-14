import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { OutUser , OutUsersSchema} from 'src/schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[
    JwtModule.register({
      secret:'secret',
      signOptions: { expiresIn :'1h'},
    }),
    MongooseModule.forFeature([
          {
            name:OutUser.name,
            schema:OutUsersSchema,
          },
        ])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
