//Se importa el modulo sequelize
const Sequelize = require("sequelize");

/**
 * Se crea un objeto con los datos de la base de datos.
 */
const sequelize = new Sequelize("banco", "backenduser", "superpassword", {
  host: "localhost",
  dialect: "mysql",
});

//
sequelize
  .authenticate()
  .then(() => {
    console.log("Se conecto exitosamente");
  })
  .then(() => { 
    cerrar();
  })
  .catch((error) => {
    console.error("Error al conectarse a la base de datos: ", error);
  });

  /**
   * Funcion asincrona que cierra la conexion con la base de datos.
   */
const cerrar = async function () {
  await sequelize.close();
};