import { DataSource } from "typeorm"
import { Envconfig } from "./env.config"
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const AppDataSource = new DataSource({
    type: "postgres",
    host: Envconfig.DB_HOST,
    port: +(Envconfig.DB_PORT || 5432),
    username: Envconfig.DB_USERNAME,
    password: Envconfig.DB_PASSWORD,
    database: Envconfig.DB_DATABASE,
    entities: [__dirname + "/../entities/**/*.entity{.ts,.js}"],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
})


export default AppDataSource