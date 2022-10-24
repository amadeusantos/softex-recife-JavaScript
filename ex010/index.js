

(async () => {
   const database = require('./db')

   try {
      const resultado = await database.sync();
      console.log("Conexão com o banco estabelecida")
   } catch (error) {
      console.log(error)
   }

})();
