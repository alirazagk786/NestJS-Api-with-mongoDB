import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item-interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){ }
    async findAllItem() : Promise<any>  {
        return await this.itemModel.find()
    }

    async createItem(createItemdto) : Promise<Item> {
        const item = new this.itemModel({
            name : createItemdto.name ,
            description : createItemdto.description,
            qty : createItemdto.qty
        })
        return await item.save()
    }

    async findOne(id){
        return await this.itemModel.findById(id)
    }

    async deleteItem(id){
        return await this.itemModel.deleteOne({_id : id})}

    async updateItem(id,itemDto){

       let item= await this.itemModel.findById(id)
       if (itemDto.name) item.name=itemDto.name;
       if(itemDto.description) item.description=itemDto.description
       if(itemDto.qty) item.qty=itemDto.qty;
       
       return await this.itemModel.updateOne({_id: id},{
        $set : item
       })
        // return this.items.find((item,index)=>{
        //     if(item.id===id){
        //        item.name=itemDto.name;
        //        item.description=itemDto.description;
        //        item.qty=itemDto.qty
        //        return this.items[index]=item;
        //     }
        // })?? "Item not Exist!"
    }
}
