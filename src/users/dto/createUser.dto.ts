import { IsNotEmpty , IsString , IsOptional , ValidateNested, MinLength} from 'class-validator'
import mongoose from 'mongoose'

export class createUserDto{
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    @MinLength(6)
    password:string;

    @IsNotEmpty()
    role:string;

    createdAt?:Date;

    @IsNotEmpty()
    right:string;

    workspaces:mongoose.Types.ObjectId[];
}