import { IsEmail, IsNotEmpty } from "class-validator";

export class createUserDto{

    @IsNotEmpty()
    name:string;
    role:string;
}