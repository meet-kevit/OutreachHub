import { Body, Controller , Get, Param, Post, Query, Req , Res, UsePipes, ValidationPipe,ParseIntPipe, ParseBoolPipe, UseGuards} from '@nestjs/common';
import type {Request,Response} from 'express';
import { createUserDto } from '../dto/createUser.dto';
import { UsersService } from '../../services/users/users.service';
import { ValidateCreateUserPipe } from '../../pipes/validate-create-user/validate-create-user.pipe';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {

    constructor (private usersService:UsersService){}
    @Get()
    getUsers(){
        return this.usersService.fetchUsers();
    }
    // @Get()
    // getUsers(){
    //     return {
    //         username:"meet",
    //         email:"meet.madani@kevit.io"
    //     }
    // }

    // @Post('addUser')
    // createUser(@Req() req: Request, @Res() res:Response){
    //     console.log(req.body);
    //     res.send('created!!!!!!!');
    // }

    // @Post('addUser')
    // @UsePipes(new ValidationPipe())
    // createUser(@Body() userData:createUserDto){
    //     console.log(userData);
    //     return {message:"Hello world"}
    // }

    @Post('addUser')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData:createUserDto){
        console.log(userData);
        return this.usersService.createUser(userData);
    }

    // @Get(':id')
    // getUserById(@Req() req:Request,@Res() res:Response){
    //     const {id} = req.params
    //    res.json({id})
    // }

    // @Get(':id')
    // getUserById(@Req() req:Request,@Res() res:Response){
    //     console.log(req.params);
    //    res.send('--')
    // }
    

    // @Get(':id')
    // getUserById(@Param('id') id:string){
    //     return {id,message:"delivered"}
    // }

    // @Get(':id')
    // getUserById(@Param('id',ParseIntPipe) id:number){
    //     return {id,message:"delivered"}
    // }

    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id:number){
        return this.usersService.getUserById(id);
    }

    // @Get()
    // getUsers(@Query('sortBy') sortBy:string){
    //     console.log(sortBy);
    //     return{
    //         sortBy
    //     }
    // }

    // @Get()
    // getUsers(@Query('sortByDesc', ParseBoolPipe) sortByDesc:boolean){
    //     console.log(sortByDesc);
    //     return{
    //         sortByDesc
    //     }
    // }

    
}
