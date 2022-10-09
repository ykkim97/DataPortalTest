const axios = require('axios');
const serviceKey = require('./config/key');
const aqiUrl = require('./config/url');

const axdata = async (stationName, callback) => {
    const url = aqiUrl.airUrl;
    const ServiceKey = decodeURIComponent(serviceKey.publicPortalkey);
}