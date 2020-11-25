var colors = require('colors');
const { argv } = require ('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        // console.log(argv);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado:' ${ colors.green(archivo) }`))
            .catch( err => console.log(colors.red.underline(err)));
        break;
    default:
        console.log(`Comando '${comando}' no reconocido`.bgRed);
}

// console.log(argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//         .then( archivo => console.log(`Archivo creado: ${archivo}`))
//         .catch( err => console.log(err));