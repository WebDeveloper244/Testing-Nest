import { Module } from '@nestjs/common';
import { carController } from './CarServices/car.controller';
import { CarService } from './CarServices/car.service';
import { productClass } from './product.controller';
import { UserModule } from './user-module/user.module';
import { userController } from './user.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './mongoose-module/database/database.module';
@Module({
  controllers: [userController,productClass,carController],
  providers:[CarService],
  imports: [

    UserModule, 
    ConfigModule.forRoot({isGlobal:true}),
    DatabaseModule
    
  ]
})
export class AppModule {}
