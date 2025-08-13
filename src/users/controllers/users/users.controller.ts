import { Controller , Get , Body , Post} from '@nestjs/common';
import { createUserDto } from 'src/users/dto/createUser.dto';
import { UserService } from 'src/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UserService){}
    @Get()
    getUsers(){
        return {name:"Meet"}
    }

    @Post()
    createUser(@Body() createUserDto:createUserDto){
       console.log(createUserDto+"!1111");
    }
}
