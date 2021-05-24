import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Pie} from 'react-chartjs-2'

const Chart = () => {
    const [chartData, setChartData]  = useState({});
    const [deaths, setdeaths] = useState([]);
    const [recovered, setrecovered] = useState([]);
    const [active, setactive] = useState([]);
    const [confirmed, setconfirmed] = useState([]);

 const Chart = () => {
        let deaths = [];
        let recovered = [];
        // let active = [];
        let confirmed = [];

        axios.get("https://covid19.mathdro.id/api/countries/kenya/")
        .then(res => {
            console.log(res);
            for(const dataObj of Object.keys(res.data)){
                confirmed.push(dataObj.confired);
                recovered.push(dataObj.recovered );
                deaths.push(dataObj.deaths );

            }
            setChartData({
                labels: deaths,
                datasets: [{
                                             label: 'level of thicceness',
                                             data: confirmed,
                                             backgroundColor: [
                                                'rgba(255, 168, 3, 1)',
                                                'rgba(255, 3, 147, 1)',
                                                'rgba(13, 118, 119, 1)',
                                             ],
                                             borderColor: [
                                                'rgba(255, 168, 3, 1)',
                                                'rgba(255, 3, 147, 1)',
                                                'rgba(13, 118, 119, 1)',
                                             ],
                                             borderWidth: 1
                                         }]
            });
        })
        .catch(err =>{
            console.log(err);
        })
        
    }
    useEffect(() => {
        Chart();
      }, []);
      return(
          <div className="App">
              <h1>Pie Chart</h1>
              <div>
                  <Pie
                    data={chartData}
                    options={{
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales:{
                            yAxes:{
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                        }
                    }}
                  />
              </div>
          </div>
      )
}

export default Chart;