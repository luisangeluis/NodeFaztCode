import { Router } from "express";

const router = Router();

//Configuracion de cada una de las rutas en este caso del index

// router.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>");
// });

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;
