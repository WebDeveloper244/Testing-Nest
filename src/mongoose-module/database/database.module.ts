import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        // MongooseModule.forRootAsync({      Method 1 you can also create direct it into app-module.ts
        //   imports:[ConfigModule],
        //   useFactory: async (configService: ConfigService)=>{

        //     const envType = configService.get('NODE-ENV');
        //     if (envType === "LOCAL") {
        //       console.log("Local Database");
        //       return {
        //        uri : "mongodb://localhost:27017/nest_app_db",
        //       }
        //     }


        //     const Uri = configService.get("MONGO_URI");
        //     console.log("MongoUri");
        //     return {
        //       uri:Uri,
        //       // useNewUrlParser: true,
        //       // useCreateIndex: true,
        //     };
        //   },
        //   inject:[ConfigService]
        // })

        //  methd 2 ---------->
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useClass: MongoService
        })
        //  methd 2 ---------->
    ],

    exports: [MongooseModule]
})
export class DatabaseModule { }
