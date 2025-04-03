import { Body, Controller, FormField, Get, Post, Route, UploadedFile } from "tsoa";
import fs from "fs"
import CategoryService from "../../services/category/Category.service";

@Route("category")
export class CategoryController extends Controller {
    @Get("/")
    async getCategory() {
        return {
            data: "hello"
        }
    }


    @Post("/")
    async createCategory(@FormField("categoryName") categoryName: string, @UploadedFile() file: Express.Multer.File,) {
        console.log(categoryName)

        const buffer = Buffer.from(file.buffer)
        const filename = Date.now() + "-" + file.originalname

        fs.writeFileSync(
            `${process.cwd()}/public/uploads/category/ ${filename}`, buffer
        )



        return await CategoryService.create(categoryName, filename)

    }







}       