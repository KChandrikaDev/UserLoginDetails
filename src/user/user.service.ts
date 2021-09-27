import { Body, Injectable, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import{LoginFormDTO } from '../dto/Create_Login.dto'; 
import{UserSchema}  from '../user.schema';
import{UserInterface}  from '../user.schema';
import { Model } from 'mongoose';
@Injectable()
export class UserService 
{
    constructor(@InjectModel('users') private readonly userInterface: Model<UserInterface>) {}
    createUser( LoginFormDTO:LoginFormDTO)
    {
       const createNewUser = this.userInterface(LoginFormDTO);
       return createNewUser.save();
    }
    getLogin()
    {
        const userLogin=this.userInterface.find();
        return userLogin;
    }
    getLoginById(Id)
    {
        const userLoginById=this.userInterface.findById(Id);
        return userLoginById;
    }

}
