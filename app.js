//Asigno a una variable la llamada al modulo express.
const express = require('express');

//Creo el objeto express para poder utilizar sus metodos.
const app = express();

//Asigno el puerto donde estara escuchando el servidor.
const puerto = 3000;

const cuentasRouter = require("./routers/cuentas.js");
const cuentahabientesRouter = require("./routers/cuentahabientes.js");

app.use(express.json());

//Registro los routers 
app.use('/cuentas', cuentasRouter);
app.use('/cuentahabientes', cuentahabientesRouter);

//En la ruta raiz muestro un mensaje donde esta ubicado.
app.get('/', (req, res) => {
 res.send(`Ruta de origen del servidor`);
});


/**
 * Arranco el servidor y estara escuchando en el puerto asignado.
 */
app.listen(puerto, () => console.log(`El servidor esta escuchando por el puerto: ${puerto}`));
