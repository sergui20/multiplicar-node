const fs = require('fs');

multiplicar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('No es un numero')
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);

            resolve('The file has been saved !')
        })
    })
}

listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Los datos ingresados no son numeros')
            return
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(tabla);
    })
}

module.exports = {
    multiplicar,
    listarTabla
}