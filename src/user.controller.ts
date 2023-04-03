import { Controller, Get, Req, Param, Query, Body } from "@nestjs/common";
import { Request } from "express";

interface getResultInterface {
    name: string,
    id: number
}
interface getQueryParams {
    name: string,
    id: number
}
interface createDocument {
    name: string,
    age: number
}

@Controller('/user')
export class userController {

    @Get('/profile')
    async getName(@Req() req: Request) {
        console.log(req.body);
        return {
            name: 'Salman Baloch'
        };
    }
    @Get('/videos/:id/:name')
    async getResult(@Param() params: getResultInterface) {
        console.log(params);     
        return params
    }
    @Get('/query')
    async getQuery(@Query() params: getQueryParams) {
        console.log(params);     
        return params
    }
    @Get('/data')
    async createData(@Body() bodyDocument: createDocument) {
        console.log(bodyDocument);     
        return bodyDocument
    }

}