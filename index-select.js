import config from './dbconfig.js';
import sql from 'mssql';
import PizzaService from './src/services/pizza-services.js';

const pizzaService = new PizzaService();

let pool = await sql.connect(config);
let result = await pool.request().query("SELECT top 2 * FROM Pizzas");

result = await pizzaService.getById(1);
result = await pizzaService.deleteById(2);


console.log(result);
process.exit();