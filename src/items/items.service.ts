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

    async createItem(item) : Promise<Item> {
        const newItem=new this.itemModel(item)
        return await newItem.save()
    }

    async findOne(id){
        return await this.itemModel.findById(id)
    }

    async deleteItem(id){
        return await this.itemModel.findByIdAndDelete({id})}

    async updateItem(id,itemDto){
       return await this.itemModel.findByIdAndUpdate(id ,itemDto ,{ new : true}
       )
    }
}
