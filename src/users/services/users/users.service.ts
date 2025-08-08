import { Injectable } from '@nestjs/common';
import {createUserType} from '../../util/types'

@Injectable()
export class UsersService {
    private fakeUsers = [{name:"Meet",role:"Intern"}]

    fetchUsers(){
        return this.fakeUsers;
    }

    createUser(userDetails : createUserType){
       console.log(isNaN(5))
       this.fakeUsers.push(userDetails);
       return;
    }

    getUserById(id){
        return {id,name:'John',role:'Intern'}
    }
}
