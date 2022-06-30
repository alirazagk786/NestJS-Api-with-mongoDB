import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { createItemDto } from './dto/create-item-dto';
import { Item } from './interfaces/item-interfaces';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private itemservice : ItemsService){}

    @Get('/')
    findAllItem() : Promise<any> {
        return this.itemservice.findAllItem()
    }

    @Post('/create')
    createItem(@Body() createItemdto : createItemDto) : Promise<Item>{
        return this.itemservice.createItem(createItemdto)
    }

    @Get(':id')
    findOne(@Param('id') id){
        return this.itemservice.findOne(id)
    }

    @Delete(':id')
    deleteItem(@Param('id') id ){
        return this.itemservice.deleteItem(id)
    }

    @Put(':id')
    updateItem(@Body() updateItemdto : createItemDto, @Param('id') id){
        return this.itemservice.updateItem(id,updateItemdto)
    }


}
