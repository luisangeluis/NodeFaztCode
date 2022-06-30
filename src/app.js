import express from "express";
import  indexRoutes from './routes/index.routes'

//Se configura el server para que funcione y pueda usar cada de las rutas en este caso de indes

const app = express();

app.use(indexRoutes);

export default app;