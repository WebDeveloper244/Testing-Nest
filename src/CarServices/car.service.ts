import { Injectable } from '@nestjs/common';
import { car } from './car.interface';

@Injectable()
export class CarService {
   private cars = new Map <number, car>()

   addCars(Car: car){
    this.cars.set(Car._id, Car)
   }
   getCarsById(id: number){
    return this.cars.get(id)
   }
   getCars(){
    return Array.from(this.cars).map(([_, Array]) => Array)
   }
   updateCarsById(id: number , Car:car){
   this.cars.set(id, Car)
   }
   deleteCarsById(id: number){
   this.cars.delete(id)
   }

}
