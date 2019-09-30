const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f47801d6fec250d521e6a17d49525a9f&units=metric`);


    return resp.data.main.temp;
}


module.exports = {

    getClima

}