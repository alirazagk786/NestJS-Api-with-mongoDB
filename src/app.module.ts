import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import configKey from './config/keys'
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
 
  imports: [ TypeOrmModule.forRoot({
    name : 'default',
    type : 'mongodb',
    host : 'localhost',
    port : 27017,
    database : 'nestJs',
    useNewUrlParser : true,
    autoLoadEntities : true,
    useUnifiedTopology : true,
    entities : [join(__dirname,'**/**.entity{.ts,.js}')],
  }),MongooseModule.forRoot(configKey.MongoURI),ItemsModule,UserModule], 
  // imports: [ ItemsModule,UserModule,MongooseModule.forRoot(configKey.MongoURI)], for mongoose
  // controllers: [ItemsController],
  // providers: [ItemsService],
})
export class AppModule {}
