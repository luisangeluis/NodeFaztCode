import {Router} from 'express';

const router =Router();

//Configuracion de cada una de las rutas en este caso del index

router.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

router.get("/about", (req, res) => {
    res.send("about");
  });

export default router;
