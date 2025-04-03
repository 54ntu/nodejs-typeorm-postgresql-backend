import { Category } from "../../entities/category/Category.entity";
import { Media, MediaType } from "../../entities/media/Media.entity"

class CategoryService {
    async create(categoryName: string, filename: string) {
        const thumbnail = new Media();
        thumbnail.name = filename
        thumbnail.mediaType = MediaType.CATEGORY_THUMBNAIL
        await thumbnail.save()


        const category = new Category()
        category.name = categoryName
        category.thumbnail = thumbnail
        await category.save()

        return category;

    }
}

export default new CategoryService()