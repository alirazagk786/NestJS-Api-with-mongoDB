import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService : UserService){}

    @Get('/')
    findAllUser() : Promise<User[]> {
        return this.userService.findAll();
    }

     @Post('/create')
    createUser(@Body() craeteuserdto : CreateUserDto) : Promise<User> {
        return this.userService.createUser(craeteuserdto);
    }

    @Get(':id')
    findSingleUser(@Param('id') id){
        return this.userService.findOne(id)
    }

    @Delete(':id')
    deleteUser(@Param('id') id){
        return this.userService.deleteUser(id)
    }

    @Put(':id')
    updateUser(@Param('id') id , @Body() userDto : CreateUserDto ){
        return this.userService.updateUser(id,userDto)
    }


    // @Get('/')
    // getAllUser(){
    //     return this.userService.getUser();
    // }

    // @Post('/create')
    // createUser(@Body() craeteuserdto : CreateUserDto) : Promise<User> {
    //     return this.userService.createUser(craeteuserdto);
    // }
}
