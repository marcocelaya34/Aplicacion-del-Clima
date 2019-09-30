const axios = require('axios');


const getLugar = async(lugar) => {

    const encodeUrl = encodeURI(lugar);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,

        headers: { 'x-rapidapi-key': 'eca7ae1f42msha511fc1fb9fd5c4p11d614jsnba318fc5d817' }
    });


    const resp = await instance.get();


    if (resp.data.Results.length === 0) {


        throw new Error(`No hay resultados para ${lugar}`);

    }



    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {

        direccion,
        lat,
        lng

    }
}


module.exports = {

    getLugar

}