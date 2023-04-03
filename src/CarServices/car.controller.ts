import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { car } from "./car.interface";
import { CarService } from "./car.service";


@Controller('/car')
export class carController {

    constructor(private carService: CarService) { }

    @Post()
     creteDoc(@Body() carType: car) {
        this.carService.addCars(carType)
        return { Message: 'Create SuccessFully' }
    }
    @Get()
     getDoc() {
        return this.carService.getCars()
    }
    @Get(':_id')
     getDocById(@Param('_id') _id: number) {
        return this.carService.getCarsById(+_id);
    }
    @Put(':id')
     updateDocById(@Param('id') id: number, @Body() updateDataWithId: car) {
        this.carService.updateCarsById(+id, updateDataWithId)
        return { Message: 'update Doc By Id' }
    }
    @Delete(':id')
     deleteDocById(@Param('id') id: number) {
        this.carService.deleteCarsById(+id)
        return { Message: 'Delete Doc By Id' }
    }
}