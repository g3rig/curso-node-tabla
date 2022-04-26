const fs = require('fs');
const colors = require('colors')

const crearArchivo = async( base = 5, l = false, h = 10) => {

    let salida = ''; 
    let consola = '';

    for(let i = 1; i <= h; i ++){
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.red} ${i} = ${base * i}\n`;
    }

    if(l){
        console.log(colors.green('===================='));
        console.log('   Tabla del:', base);
        console.log(colors.green('===================='));
        console.log(consola);
    }

    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

    return colors.underline(`Tabla-${base}.txt creada`);

}

module.exports = {
    crearArchivo
}