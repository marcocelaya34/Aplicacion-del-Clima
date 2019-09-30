const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(direccion) => {

    try {

        const cordenadas = await lugar.getLugar(direccion);
        const temperatura = await clima.getClima(cordenadas.lat, cordenadas.lng);

        return `El clima de ${direccion} es de ${temperatura} `;

    } catch (error) {

        return `No se pudo determinar el clima de ${direccion}`

    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);