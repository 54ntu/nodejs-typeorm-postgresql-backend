import { Column, Entity, OneToOne } from "typeorm";
import { CommonEntity } from "../common/Common.entity";
import { Media } from "../media/Media.entity";


@Entity()
export class Category extends CommonEntity {
    @Column()
    name: string


    @OneToOne(() => Media)
    thumbnail: Media
}