import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository : Repository<User>){}

    async findAll(): Promise<User[]>{
    return await this.userRepository.find()
    }

    async findOne(id){
        return await this.userRepository.findOne(id)
    }

    async createUser(newUser)  : Promise<User> {
    return await this.userRepository.save(newUser)?? "Oops!"
    }

    async deleteUser(id){
        return await this.userRepository.delete(id)
    }
    async updateUser(id,user){
        return await this.userRepository.update(id,user)
    }





    // Mongoose
//     constructor(@InjectModel('User') private readonly userModel : Model<any>){}
//    async  getUser(){
//         return await this.userModel.find()
//     }

//     async createUser(craeteuserdto)  : Promise<User> {
//         const user= new this.userModel({
//             name : craeteuserdto.name,
//             email : craeteuserdto.email,
//             age : craeteuserdto.age
//         });

//     return await user.save()?? "Oops!"
//     }
}
