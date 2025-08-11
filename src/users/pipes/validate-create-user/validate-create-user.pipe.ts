import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { parse } from 'path';
import { createUserDto } from 'src/users/controllers/dto/createUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log("Inside validateCreateUserPipe");
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.role);
    if(!isNaN(parseAgeToInt)){
      console.log(`${value.role} is not a number`);
      throw new HttpException('Invalid Data type for property role',HttpStatus.BAD_REQUEST)
    }
    console.log(`${parseAgeToInt} is a number. Returning...`);
    return {...value,age:parseAgeToInt}
    return value;
  }
}
