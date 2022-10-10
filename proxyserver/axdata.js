const axios = require('axios');
const serviceKey = require('./config/key');
const aqiUrl = require('./config/url');

const axdata = async (stationName, callback) => {
    const url = aqiUrl.airUrl;
    const ServiceKey = decodeURIComponent(serviceKey.publicPortalkey);

    try {
        const response = await axios.get(
            url,
            {
                params : 
                {
                    dataTerm : 'DAILY',
                    stationName : stationName,
                    pageNo : 1,
                    numOfRows : 1,
                    ver : '1.3',
                    returnType : 'json',
                    ServiceKey : ServiceKey
                }
            }
        ) 
        console.log(response, '응답');
        const { dataTime, pm10Value, pm25Value, no2Value } = response.data.response.body.items[0];
        const airquality = {
            location : stationName,
            time : dataTime,
            pm10 : pm10Value,
            pm25 : pm25Value,
            no2 : no2Value
        }
        callback(undefined, {airquality})
    } catch (error) {
        console.log(error);
    }
}

module.exports = axdata;