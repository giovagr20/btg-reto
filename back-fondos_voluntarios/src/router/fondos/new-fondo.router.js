const express = require("express");
const routes = express.Router();
const _fondos = require("../../models/fondos.model");

routes.get("/listarFondos", async (req, res) => {
  const response = await _fondos.find();

  if (response === null) {
    res.send({
      message: null,
      error: "Ha ocurrido un error interno, por favor contactar administrador",
    });
  }

  if (response.length === 0) {
    res.send({
      message: null,
      error: "No hay fondos existentes",
    });
  } else {
    res.send({
      message: response.length,
      error: null,
    });
  }
});

routes.post("/apertura", async (req, res) => {
  console.log(req.body);

  const { name, minimum, category } = req.body;
  if (!name || !minimum || !category) {
    res.send({
      message: null,
      error: "Ha ocurrido un error, por favor validar los datos ingresados",
    });
  }

  const data = {
    name: name,
    minimum: minimum,
    category: category,
  };

  const exist = await _fondos.findOne(data);

  if (!exist) {
    if (minimum <= 500000) {
      res.send({
        message: null,
        error: `El monto para primer fondo debe ser superior a 500000`,
      });
    }
    const newFondo = new _fondos(data);

    await newFondo.save();
  }
});

module.exports = routes;
