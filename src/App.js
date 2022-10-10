import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [airData, setAirData] = useState([]);

  useEffect(() => {
    async function fetchAirData() {
      const response = await axios.get('http://localhost:8000');
      const { location, time, pm10, pm25, no2 } = response.data;
      setAirData({ location, time, pm10, pm25, no2 });
    }
    fetchAirData();
    console.log(airData)
  }, [])

  return (
    <div className="App">
      <ul>
        <li>위치 : {airData.location}</li>
        <li>시각 : {airData.time}</li>
        <li>pm10 : {airData.pm10}</li>
        <li>pm2.5 : {airData.pm25}</li>
        <li>no2 : {airData.no2}</li>
      </ul>
    </div>
  );
}

export default App;
