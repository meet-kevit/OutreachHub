import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://meetmadani:meetmadani@cluster0.k81uvvx.mongodb.net/'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
