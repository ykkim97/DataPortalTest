const express = require('express');
const app = express();
const cors = require('cors');
const axdata = require('./axdata.js');
const axTourData = require('./axTourData.js');

app.use(cors());

app.get('/tour', async(req, res) => {
    // await axdata('송파구', (error, {airquality}={}) => {
    //     if (error) {
    //         res.send(error);
    //     }
    //     res.send(airquality);
    // });
    await axTourData('강원', (error, {result}={}) => {
        if (error) {
            res.send(error);
        }
        res.send(result);
    });
})

app.listen(8000, () => {
    console.log('The server is running at the port 8000');
})