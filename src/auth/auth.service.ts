import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import mongoose from 'mongoose'
import { AuthPayloadDto } from './dto/auth.dto';
import {Model} from 'mongoose';
import { OutUser } from '../schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,@InjectModel(OutUser.name) private userModel:Model<OutUser> ){}

    async loginUser({username,password}:AuthPayloadDto){
        console.log(username)
        const findUser = await this.userModel.findOne({username}).exec();
        if(!findUser) throw new HttpException('User Not found',404);

        const result = bcrypt.compare(password,findUser.password);

        if(!result){
            throw new HttpException('Password incorrect',404);
        }
        const payload = {id:findUser._id,username:findUser.username}

        return await this.jwtService.sign(payload);
    }
}
