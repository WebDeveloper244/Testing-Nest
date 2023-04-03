import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { createProductData } from "./productInterFace/productType";

let productArray = [];
@Controller('/product')
export class productClass {

    @Post()
    async docToCreate(@Body() createProductDTO: createProductData) {
        productArray.push(createProductDTO)
        return 'Data Save SuccessFully'
    }

    @Get()
    docToGet() {
        console.log(productArray);
        return productArray
    }

    @Get('Id/:productId')
    docToGetById(@Param('productId') productId: number) {
        return productArray.find((product: any) => +product.productId === +productId)
    }

    @Put('/:productId')
    async docToUpDteById(@Param('productId') productId: number, @Body() createProductDTO: createProductData) {
        const findProduct = productArray.findIndex((product: any) => product.productId === productId)

        if (!findProduct) {
            return 'Nothing Found'
        }
        console.log('successful');
        return productArray[findProduct] = createProductDTO

    }

    @Delete('/:productId')
    docToDel(@Param('productId') productId: number) {
        productArray = productArray.filter(product => +product.productId !== +productId)
        console.log('delete');
        return productArray
    }
}

