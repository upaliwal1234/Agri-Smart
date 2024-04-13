import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WeatherInfo() {
    // const navigate = useNavigate();
    // const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('');
    //         if (!response.data) {
    //             navigate('/');
    //         } else {
    //             setData(response.data);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };
    let data = [{ date: "11", temperature: "20", humidity: "5", windSpeed: "220" },
    { date: "12", temperature: "20", humidity: "5", windSpeed: "220" },
    { date: "13", temperature: "20", humidity: "5", windSpeed: "220" },
    { date: "14", temperature: "20", humidity: "5", windSpeed: "220" }];
    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div className="flex flex-wrap justify-center">
            {data.map((item, index) => (
                <div key={index} className="flex flex-row m-2 justify-around border border-black w-1/2 p-4">
                    <h2 className="text-lg font-bold mb-2">{item.date}</h2>
                    <p>Temperature: {item.temperature}</p>
                    <p>Humidity: {item.humidity}</p>
                    <p>Wind Speed: {item.windSpeed}</p>
                </div>
            ))}
        </div>

    );
}

export default WeatherInfo;
