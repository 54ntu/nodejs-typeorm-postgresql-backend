import { AfterLoad, Column, Entity } from "typeorm";
import { CommonEntity } from "../common/Common.entity";

export enum MediaType {
    CATEGORY_THUMBNAIL = "CATEGORY_THUMBNAIL",
    FOOD_THUMBNAIL = "FOOD_THUMBNAIL",
}

@Entity()
export class Media extends CommonEntity {
    @Column()
    name: string

    @Column()
    mediaType: MediaType

    @AfterLoad()
    _() {
        this.name = `http://localhost:3000/uploads/category/${this.name}`
    }
}