import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { OutUser } from "src/schemas/users.schema";
import { Model } from 'mongoose'
import { createUserDto } from "./dto/createUser.dto";
@Injectable()
export class UserService{
    constructor(@InjectModel(OutUser.name) private userModel:Model<OutUser>){}

    createUser(createUserDto : createUserDto){
        const newuser = new this.userModel(createUserDto);
        return newuser.save();
    }
}