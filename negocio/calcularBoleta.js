const moneda = (monto) => {
    monto = monto.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
    return monto.split('').reverse().join('').replace(/^[\.]/, '');
}

const boleta = (base) => {
    return new Promise((resolve, reject) => {
        if(isNaN(base)){
            reject('La base ingresada no es un numero');
        }
        let total = Math.round(base / 0.9);
        
        let data = {
            base: moneda(base),
            retencion: moneda(total - base),
            total: moneda(total)
        }
        resolve(data);
    })
}



module.exports = {
    boleta
}
