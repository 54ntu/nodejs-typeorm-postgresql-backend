import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { CommonEntity } from "../common/Common.entity";
import { Media } from "../media/Media.entity";
import { Food } from "../food/Food.entity";


@Entity()
export class Category extends CommonEntity {
    @Column()
    name: string


    @OneToOne(() => Media)
    thumbnail: Media


    @OneToMany(() => Food, (f) => f.category)
    food: Food
}