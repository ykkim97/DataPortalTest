import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [airData, setAirData] = useState([]);
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    // async function fetchAirData() {
    //   const response = await axios.get('http://localhost:8000');
    //   const { location, time, pm10, pm25, no2 } = response.data;
    //   setAirData({ location, time, pm10, pm25, no2 });
    // }
    // fetchAirData();
    // console.log(airData)
  }, [])

  useEffect(() => {
    async function fetchTourData() {
      const response = await axios.get('http://localhost:8000/tour');
      setTourData(response.data);
    }
    fetchTourData();
    
  }, [])

  useEffect(() => {
    console.log(tourData, "tourData");
  }, [tourData])

  return (
    <div className="App">
      <ul>
        {tourData?.map((item, index) => (
            <>
              <li>
                <img src={item.firstimage} />
                <h3>{item.title}</h3>
                <h4>주소 | {item.addr1} {item.addr2}</h4>
                <h4></h4>
              </li>
              
            </>
          )
        )}
      </ul>
    </div>
  );
}

export default App;

