import * as fs from 'fs';

export function copiar(entrada, salida) {
    fs.readFile(entrada, 'utf8', (error, data) => {
        if (error) throw error;
        
        fs.writeFile(salida, data, (error) => {
            if (error) throw error;
        
            console.log(`El archivo ${entrada} ha sido copiado con éxito como ${salida}.`);
        });
    });
}