import { Router } from "express";
import Task from '../models/Task';
const router = Router();

//Configuracion de cada una de las rutas en este caso del index

// router.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>");
// });

router.get("/", async(req, res) => {
  const tasks =await Task.find().lean()
  console.log(tasks);
  res.render("index",{tasks:tasks});
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

router.post('/tasks/add',async(req,res)=>{
  // // console.log(req.body);
  // const task =Task(req.body)
  // // console.log(task);
  // const taskSaved = await task.save();
  // console.log(taskSaved);
  // res.send('added');

  try{
    const task = Task(req.body)
    await task.save();
    res.redirect('/');
  }catch(error){
    console.log(error);
  }
 
})

export default router;
