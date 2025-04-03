import "reflect-metadata"
import AppDataSource from "./config/db.config"
import express from "express"
import { Envconfig, Environment } from "./config/env.config"
import { RegisterRoutes } from "./routes/routes"




AppDataSource.initialize()
    .then(() => {
        console.log("database connected successfully")

        const app = express()
        app.use(express.json())
        app.use(express.static("public"))

        RegisterRoutes(app)
        if (Envconfig.NODE_ENV === Environment.DEVELOPMENT) {
            const swaggerUi = require('swagger-ui-express');
            const swaggerDocument = require('../public/swagger.json');

            app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        }
        app.listen(Envconfig.port, () => {
            console.log(`server is listening at port ${Envconfig.port}`)
        })
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })