const express = require("express");
const morgan = require("morgan")
const cors = require("cors");

const routes = require("./routes/mainRouter")

const app = express();
app.use(cors());

app.use(morgan("dev")) //morgan imprime en consola las peticiones

app.use(express.json()) // permite que express utilice json

app.use("/",routes)

module.exports = app
