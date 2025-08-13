import { IsNotEmpty , IsString , IsOptional , ValidateNested} from 'class-validator'
import mongoose from 'mongoose'

export class createUserDto{
    @IsNotEmpty()
    username:string;
    password:string;
    role:string;
    createdAt:Date;
    right:string;
    workspaces:mongoose.Types.ObjectId[];
}