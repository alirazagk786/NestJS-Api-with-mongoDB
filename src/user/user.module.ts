import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';


@Module({
  imports : [TypeOrmModule.forFeature([User])],
  // imports : [MongooseModule.forFeature([{name : "User" , schema : userSchema}])], for mongoose
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
