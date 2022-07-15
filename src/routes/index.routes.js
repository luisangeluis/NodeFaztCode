import { Router } from "express";
import Task from '../models/Task';
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

router.post('/tasks/add',(req,res)=>{
  console.log(req.body);
  const task =Task(req.body)
  console.log(task);

  res.send('added');
})

export default router;
