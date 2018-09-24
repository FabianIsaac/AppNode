const { argv } = require('./comandos/comandos');
const colors = require('colors/safe');
const { boleta } = require('./negocio/calcularBoleta');

switch (argv._[0]) {
    case 'calcular':        
        boleta(argv.base).then(resultado => {
            console.log(`Base ingresada:        ${colors.green('$ '+resultado.base)}`);
            console.log(`Retencion del 10%:     ${colors.green('$ '+resultado.retencion)}`);
            console.log(`Monto a cobrar:        ${colors.blue('$ '+resultado.total)}`);
        }).catch(e => console.log(e.red));

        break;
    default:
        console.log('No se ha ingresado un comando\nPuede ejecutar el comando --help para ver la lista de comandos disponibles');
}