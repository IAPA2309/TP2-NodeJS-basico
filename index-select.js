import config from './dbconfig.js';
import sql from 'mssql';
import PizzaService from './src/services/pizza-services.js';
import Pizza from './src/models/pizza.js';

const pizzaService = new PizzaService();

let pool = await sql.connect(config);
let result = await pool.request().query("SELECT top 2 * FROM Pizzas");

// result = await pizzaService.getAll();
// console.log(result);

// result = await pizzaService.getById(1);
// console.log(result);

// const pizza = new Pizza(
//   1,
//   "Pizza de jamón y queso",
//   false,
//   10.5,
//   "Deliciosa pizza con jamón, queso, y salsa de tomate"
// );
// result = await pizzaService.insert(pizza);
// console.log(result);

// result = await pizzaService.deleteById(8);
// console.log(result);


process.exit();