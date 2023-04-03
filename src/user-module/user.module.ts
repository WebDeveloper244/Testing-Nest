import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { AccountController } from './controllers/account/account.controller';
import { ServicesService } from './services/services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/mongooseSchema/userSchema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:"UserSchema", schema:userSchema
  }])],
  controllers: [UserController, AccountController],
  providers: [ServicesService],
  exports:[MongooseModule]
})
export class UserModule {}
