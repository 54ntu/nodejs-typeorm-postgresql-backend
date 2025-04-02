import { Column, Entity } from "typeorm";
import { CommonEntity } from "../common/Common.entity";

export enum MetaType {
    CONTACT = "CONTACT",
    ADDRESS = "ADDRESS",
    VENDOR_NAME = "VENDOR_NAME",
    BUSINESS_HOURS = "BUSINESS_HOURS",
    SOCIAL_MEDIA = "SOCIAL_MEDIA",
    ABOUT = "ABOUT",

}

@Entity()
export class Meta extends CommonEntity {
    @Column({ type: "enum", enum: MetaType })
    type: MetaType

    @Column({ type: "text" })
    value: string

}