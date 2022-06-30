import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class User{
    
    @ObjectIdColumn()
     id: ObjectId

    @Column()
    name : string

    @Column()
    email : String

    @Column()
    age : String
}