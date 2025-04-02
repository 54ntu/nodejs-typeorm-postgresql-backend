import { BaseEntity, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class CommonEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string


    @CreateDateColumn()
    createdAt: Date


    @DeleteDateColumn()
    deleteAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}