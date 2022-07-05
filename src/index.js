import app from './app';
import './database.js';

//Arrancar el servidor o ponerlo a la escucha
app.listen(3000);
console.log("server on port", 3000);
