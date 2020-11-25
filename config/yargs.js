const settings = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}


const argv = require('yargs')
        .command('listar','Imprime por consola la tabla de multiplicar'.blue, settings)
        .command('crear', 'Crear un fichero de texto con la tabla de multiplicar de base y límite indicados por el usuario'.blue, settings)
        .help()
        .argv;




module.exports = {
    argv
}