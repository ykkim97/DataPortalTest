const axios = require('axios');
const serviceKey = require('./config/key');
const aqiUrl = require('./config/url');

const axTourData = async (keyword, callback) => {
    const url = aqiUrl.tourUrl;
    const keywordSearchUrl = `${url}/searchKeyword1`;
    const ServiceKey = decodeURIComponent(serviceKey.publicTourKey);

    try {
        const response = await axios.get(
            keywordSearchUrl,
            {
                params : 
                {
                    serviceKey : ServiceKey,
                    MobileOS : 'WIN',
                    MobileApp : 'tourTest',
                    numOfRows : 10,
                    keyword : keyword,
                    pageNo : 1,
                    _type : 'json',
                    listYN : 'Y'
                }
            }
        ) 
        console.log(response.data.response.body.items.item, '응답');
        // const { 
        //     addr1,
        //     areacode,
        //     booktour,
        //     cat1,
        //     cat2,
        //     cat3,
        //     contentid,
        //     contenttypeid,
        //     createdtime,
        //     firstimage,
        //     modifiedtime,
        //     title,
        //     tel
        // } = response.data.response.body.items.item;
        
        // const tourResult = {
        //     addr1,
        //     areacode,
        //     booktour,
        //     cat1,
        //     cat2,
        //     cat3,
        //     contentid,
        //     contenttypeid,
        //     createdtime,
        //     firstimage,
        //     modifiedtime,
        //     title,
        //     tel
        // }
        const result = response.data.response.body.items.item;

        console.log(result, 'tourResult');
        await callback(undefined, {result})
    } catch (error) {
        console.log(error);
    }
}

module.exports = axTourData;