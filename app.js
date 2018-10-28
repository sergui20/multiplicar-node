const argv = require('./config/yargs');
const { multiplicar, listarTabla } = require('./multiplicar');

let comando = argv._[0];
var base = argv.base;
var limite = argv.limite;

switch (comando) {

    case 'listar':
        listarTabla(base, limite)
            .then((tabla) => console.log(tabla))
            .catch(err => console.log(err))
        break;

    case 'crear':
        multiplicar(base, limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido')
}