import { config } from "dotenv";
import sql from 'mssql';

export default class PizzaService {
  getById = async (id) => {
    let returnEntity = null;
    console.log("Estoy en: PizzaService.GetById(id)");
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
  }
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