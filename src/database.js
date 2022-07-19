import { connect } from "mongoose";

(async () => {
  // const password = "1vFrD2Lc331i4Cb2";
  // const dbname = "pokedex";

  try {
    const db = await connect(
      // `mongodb+srv://Luis:${password}@cluster0.0tpwtaj.mongodb.net/?retryWrites=true&w=majority`
      `mongodb+srv://luisangeluis:Nxtlxer00@cluster0.oaq1txq.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("db connected to ", db.connection.name);
    console.log("hola");
  } catch (error) {
    console.log(error);
  }
})();
