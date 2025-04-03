import { Controller, Get, Route } from "tsoa";

@Route("category")
export class CategoryController extends Controller {


    @Get("/")
    async getCategory() {
        return {
            data: "hello"
        }
    }
}