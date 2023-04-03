import { Injectable } from '@nestjs/common';
import { InjectModel, ModelDefinition } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userSchema } from 'src/mongooseSchema/userSchema/user.schema';

@Injectable()
export class ServicesService {
    // constructor(@InjectModel(userSchema.name) private readonly userSchema:Model<Document>){}
}
