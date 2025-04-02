import { DataSource } from "typeorm"
import { Envconfig } from "./env.config"

const AppDataSource = new DataSource({
    type: "postgres",
    host: Envconfig.DB_HOST,
    port: +(Envconfig.DB_PORT || 5432),
    username: Envconfig.DB_USERNAME,
    password: Envconfig.DB_PASSWORD,
    database: Envconfig.DB_DATABASE,
    entities: [__dirname + "/../entities/**/*.entity{.ts,.js}"],
})


export default AppDataSource