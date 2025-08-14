import { IsNotEmpty , MinLength } from "class-validator";
import mongoose from 'mongoose'

export class updateUserDto{
    @IsNotEmpty()
        username:string;
    
        @IsNotEmpty()
        @MinLength(6)
        password:string;
    
        @IsNotEmpty()
        role:string;
    
        @IsNotEmpty()
        createdAt:Date;
    
        @IsNotEmpty()
        right:string;
        
        workspaces:mongoose.Types.ObjectId[];
}