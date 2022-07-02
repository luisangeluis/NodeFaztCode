import express from "express";
import exphbs, { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";

//Se configura el server para que funcione y pueda usar cada de las rutas en este caso de indes
const app = express();

//Se configura para usar las views con express handlebars
app.set("views", path.join(__dirname, "views"));
const hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir:path.join(app.get('views'),'partials'),
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine(".hbs",hbs.engine);
app.set("view engine", ".hbs");

//Se agregan todas las rutas
app.use(indexRoutes);

export default app;
