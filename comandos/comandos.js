const argv = require('yargs')
    .command('calcular', 'Calcula el monto por el cual deberia ser emitida una boleta electrónica', {
        base: {
            demand: true,
            alias: 'b'
        }
    }).help().argv;

module.exports = {
    argv
}