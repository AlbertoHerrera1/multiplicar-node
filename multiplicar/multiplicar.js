const colors = require('colors');
const fileSystem = require('fs');

let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('========================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

//puede ser module.exports.crearArchivo = (base)...
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            var resultado = i * base
            data += `Base: ${base}, factor: ${i}, resultado: ${resultado} \n`;
        }

        fileSystem.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
}



module.exports = {
    listarTabla,
    crearArchivo
}