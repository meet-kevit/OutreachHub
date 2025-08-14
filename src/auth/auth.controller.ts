import { Controller , Post , Body, HttpException} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    
    constructor(private authService:AuthService){}
    @Post('login')
    loginUser(@Body() authPayload:AuthPayloadDto){
         const user = this.authService.loginUser(authPayload);
         if(!user){
            throw new HttpException('Not found',404);
         }
         return user;
    }
}
