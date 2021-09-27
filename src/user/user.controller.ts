import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, } from '@nestjs/common';
import { create } from 'domain';
import { get } from 'http';
import{LoginFormDTO } from '../dto/Create_Login.dto'; 
import { UserService } from '../user/user.service';
import {ValidationPipe} from '../uservalidation.pipe';

@Controller('user')
export class UserController 
{
    constructor ( private readonly userService: UserService) {}
    @Post('signup')
    @UsePipes(new ValidationPipe())
        createUser(@Body() LoginFormDTO:LoginFormDTO): string 
        {
        const createNewUser = this.userService.createUser(LoginFormDTO);
        return createNewUser;
        }
    @Get('LoginUser')
        getLogin()
        {
        const loginUser=this.userService.getLogin();
        return loginUser;
        }
    @Get(':Id')
        getLoginById(@Param('Id', ParseIntPipe) Id : number)
        {
        const userLoginById=this.userService.getLoginById(Id);
        return userLoginById;
        }
    @Delete()
        deleteUserByID(){
            return "Delete the user By ID";
        }
}
