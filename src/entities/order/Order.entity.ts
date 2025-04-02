import { Column, OneToOne } from "typeorm";
import { CommonEntity } from "../common/Common.entity";
import { Food } from "../food/Food.entity";

export class Order extends CommonEntity {
    @Column()
    quantity: number

    @Column()
    comment: string

    @Column({ type: "real" })
    totalPrice: number

    @OneToOne(() => Food)
    food: Food

}