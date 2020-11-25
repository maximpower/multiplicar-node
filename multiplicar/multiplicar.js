const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    if(!Number(base) || !Number(limite)){
        console.log(`La base ${base} o el límite ${limite} no es un número válido`);
        return;
    }else if(base == true || limite == true){
        console.log(`La base y/o el límite no pueden ser vacíos`.red.underline);
        return;
    }
    console.log('==========================='.yellow);
    console.log(` TABLA DEL ${base} `.yellow);
    console.log('==========================='.yellow);
    for(let i =0; i<=limite; i++){
        console.log(`${base} * ${ i } = ${base * i}`);
    }
}


crearArchivo = ( base, limite = 10 ) => {
    return new Promise((resolve, reject) =>{

        if(!Number(base) ){
            reject(`El valor introducido "${ base }" no es un número`);
            return;
        }else if(base == true){
            reject(`El valor de base no puede ser vacío.`);
        }
        let data = '';
        for(let i =1; i<=limite; i++){
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if (err) 
            reject(err);
        else
            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}