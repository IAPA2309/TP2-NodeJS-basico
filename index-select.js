import config from './dbconfig.js';
import sql from 'mssql';
import PizzaService from './src/services/pizza-services.js';

let pool = await sql.connect(config);
let result = await pool.request().query("SELECT top 2 * FROM Pizzas");
console.log(PizzaService.getById(1));

console.log(result);

process.exit();