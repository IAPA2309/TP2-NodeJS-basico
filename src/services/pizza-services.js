import { config } from "dotenv";
import sql from "mssql";
import pkg from "mssql";
const { MAX } = pkg;

export default class PizzaService {
  getAll = async () => {
    let returnEntity = null;
    console.log("Estoy en: PizzaService.getAll()");
    try {
      let pool = await sql.connect(config);
      let result = await pool.request().query("SELECT * FROM Pizzas");
      returnEntity = result.recordsets;
    } catch (error) {
      console.log(error);
    }
    return returnEntity;
  };

  getById = async (id) => {
    let returnEntity = null;
    console.log("Estoy en: PizzaService.getById(id)");
    try {
      let pool = await sql.connect(config);
      let result = await pool
        .request()
        .input("pId", sql.Int, id)
        .query("SELECT * FROM Pizzas WHERE id = @pId");
      returnEntity = result.recordsets[0][0];
    } catch (error) {
      console.log(error);
    }
    return returnEntity;
  };

  insert = async (pizza) => {
    const insertQuery =
      "INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)";
    console.log(pizza.nombre);
    try {
      let pool = await sql.connect(config);
      let result = await pool
        .request()
        .input("pNombre", sql.NVarChar(150), pizza.nombre)
        .input("pLibreGluten", sql.Bit, pizza.libreGluten)
        .input("pImporte", sql.Float, pizza.importe)
        .input("pDescripcion", sql.NVarChar(MAX), pizza.descripcion)
        .query(insertQuery);
    } catch (error) {
      console.log(error);
    }
  };

  deleteById = async (id) => {
    let rowsAffected = 0;
    console.log(`Estoy en: PizzaService.deleteById(id)`);
    try {
      let pool = await sql.connect(config);
      let result = await pool
        .request()
        .input("pId", sql.Int, id)
        .query("DELETE FROM Pizzas WHERE id = @pId");
      rowsAffected = result.rowsAffected;
    } catch (error) {
      console.log(error);
    }
    return rowsAffected;
  };
}
