import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';




@Injectable()
export class MongoService implements MongooseOptionsFactory {
    constructor(private configService: ConfigService) { }

    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {

        const Uri = this.configService.get("MONGO_URI");
        const packageJson = require('../../../package.json');
        console.log( `MongoDb Connected SuccessFully \n your App has following Dependencies \n `)
        for(let dependencies in packageJson.dependencies){      //loop in object keys so use for in loop
            console.log( `${dependencies}`);
        }
        
        return {

            uri: Uri,
            // useNewUrlParser: true,
            // useCreateIndex: true,

        };
    }

}
