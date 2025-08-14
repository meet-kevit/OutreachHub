import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { OutUser } from "src/schemas/users.schema";
import { Model } from 'mongoose'
import { createUserDto } from "./dto/createUser.dto";
import * as bcrypt from 'bcrypt'
import { updateUserDto } from "./dto/updateUser.dto"; 

@Injectable()
export class UserService{
    constructor(@InjectModel(OutUser.name) private userModel:Model<OutUser>){}

    async createUser(createUserDto : createUserDto){

        const {password,...rest} = createUserDto;
        const hashedPass = await bcrypt.hash(password,15);
        
        const obj = {...rest,password:hashedPass}
        const newuser = new this.userModel(obj);
        console.log(obj);
        
        return newuser.save();
    }

    getUsers(){
        return this.userModel.find({},'id  username password role right workspaces').exec();
    }

    getUserById(id:string){
        return this.userModel.findById({_id:id},'id  username role right workspaces').exec();
    }

    deleteUser(id:string){
        return this.userModel.findByIdAndDelete(id);
    }

    updateUser(id:string , updateUserDto:updateUserDto){
        return this.userModel.findByIdAndUpdate(id,updateUserDto)
    }
}