import 'dotenv/config'

export enum Environment {
    DEVELOPMENT = "DEVELOPMENT",
    PRODUCTION = "PRODUCTION",
    TEST = "TEST"

}
export class Envconfig {
    static DB_HOST = process.env.DB_HOST;
    static DB_PORT = process.env.DB_PORT;
    static DB_USERNAME = process.env.DB_USERNAME;
    static DB_PASSWORD = process.env.DB_PASSWORD;
    static DB_DATABASE = process.env.DB_DATABASE;

    //app data 
    static port = process.env.PORT
    static NODE_ENV = process.env.NODE_ENV

}

