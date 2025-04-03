import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { CommonEntity } from "../common/Common.entity";
import { Media } from "../media/Media.entity";
import { Category } from "../category/Category.entity";


export enum FoodSpicyness {
    MILD = "MILD",
    MEDIUM = "MEDIUM",
    SPICY = "SPICY",
    EXTRA_SPICY = "EXTRA_SPICY",
}

@Entity()
export class Food extends CommonEntity {
    @Column()
    name: string

    @Column({ type: "real" })
    price: number


    @Column({ type: "enum", enum: FoodSpicyness })
    spicyness: FoodSpicyness


    @Column({ default: 0, type: "int" })
    quantity: number


    @OneToOne(() => Media)
    image: Media


    @ManyToOne(() => Category, (category) => category.food)
    category: Category

}