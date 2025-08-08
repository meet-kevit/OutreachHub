import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {

  use(req: any, res: any, next: () => void) {
    console.log("This is example middlewear");
    console.log(req.headers.authorization);
    const {authorization} = req.headers
    if(!authorization){
      throw new HttpException('No authorization token', HttpStatus.FORBIDDEN)
    }
    next();
  }
}
