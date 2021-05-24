import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Pie} from 'react-chartjs-2'

const Chart = () => {
    const [chartData, setChartData]  = useState({});
    // const [deaths, setdeaths] = useState([]);
    // const [recovered, setrecovered] = useState([]);
    // const [active, setactive] = useState([]);
    // const [confirmed, setconfirmed] = useState([]);

 const Chart = () => {
        

        axios.get("https://covid19.mathdro.id/api/countries/kenya/")
        .then(res => {
            // console.log(res.data.confirmed.value);
            let confirmed = parseInt(res.data.confirmed.value);
            let deaths = parseInt(res.data.deaths.value);
            let recovered = parseInt(res.data.recovered.value);
            let title = Object.keys(res.data);
            // console.log(title);
            setChartData({
                labels: title,confirmed,recovered,deaths,
                datasets: [{
                                             label: 'Siple pie chart',
                                             data: [confirmed,recovered,deaths],
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
              <h1>Pie Chart Covid-19 Analysis(Kenya)</h1>
              <div>
                  <Pie
                    data={chartData}
                    options={{
                        responsive:true,
                        title: { text: "Covid Analysis in kenya", display: true },
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