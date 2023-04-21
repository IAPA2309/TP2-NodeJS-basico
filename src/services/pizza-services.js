export default class PizzaService {
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetById(id)');
        try{
            let pool = await sql.connect(config);
            let result = await sql.request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM Pizzas WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        }catch(error) {
            console.log(error);
        }
        return returnEntity;
    }
}