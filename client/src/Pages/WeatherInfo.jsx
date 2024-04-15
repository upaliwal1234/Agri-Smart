import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppState } from '../Context/AgriProvider';
function WeatherInfo() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    let [startDate, setstartDate] = useState('');
    let [endDate, setendDate] = useState('');
    const { setIsLoading } = AppState();
    const handleStartDate = (e) => {
        setstartDate(e.target.value);
    }

    const handleEndDate = (e) => {
        setendDate(e.target.value);
    }
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Jaipur,India/2024-04-14/2024-04-15?key=LWDB3C2U2TTNPDA5VW4NGD8BK');
            if (!response.data) {
                setIsLoading(false);
                navigate('/');
            } else {
                setData(response.data.days);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Error fetching data:", error);
        }
    };
    const handleButtonClick = async () => {
        try {
            setIsLoading(true);
            // Make the API request with the formatted dates
            const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Jaipur,India/${startDate}/${endDate}?key=LWDB3C2U2TTNPDA5VW4NGD8BK`);

            // Check if data is returned
            if (!response.data) {
                setIsLoading(false);
                navigate('/');
            } else {
                setIsLoading(false);
                setData(response.data.days);
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='flex flex-row justify-center'>
                <input className="p-2 m-2 border border-black" type="date" id="startDate" value={startDate} onChange={handleStartDate} />
                <input className="p-2 m-2 border border-black" type="date" id="endDate" value={endDate} onChange={handleEndDate} />
                <button className="bg-white m-2 w-20 border border-black hover:bg-green-800" onClick={handleButtonClick}>Search</button>
            </div>
            <div className="flex flex-wrap justify-center">

                {data.map((item, index) => (
                    <div key={index} className="flex flex-row m-2 bg-[#2b9348] rounded-lg justify-around border border-black w-3/5 p-4 hover:bg-green-800">
                        <h6 className="text-lg  mb-2">Date: {item.datetime}</h6>
                        <p>Temperature: {((item.tempmax - 32) * 5 / 9).toFixed(2)}°C - {((item.tempmin - 32) * 5 / 9).toFixed(2)}°C</p>

                        <p>Wind Speed: {item.windspeed}</p>
                        <div className="flex flex-row items-center">
                            <svg className="precip-icon h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
                                <path fill="none" fillRule="nonzero" stroke="#000" strokeWidth=".714" d="M5.532.891c1.723.952 5.315 5.477 5.775 8.756.028 1.718-.534 3.101-1.45 4.082C8.888 14.766 7.52 15.357 6 15.357a5.532 5.532 0 0 1-3.74-1.425c-.975-.89-1.587-2.124-1.616-3.49.503-4.035 4.013-8.49 4.888-9.551Zm-1.815 7.33a.336.336 0 0 0-.025.043c-.322.62-.59 1.255-.695 2.207.012.408.143.787.358 1.111.234.352.568.641.96.839.035.017.071.021.106.017a.201.201 0 0 0 .104-.044l.01-.005-.078-.1c-.328-.415-.82-1.067-.82-1.946 0-.752.076-1.613.08-2.121Z">
                                </path>
                            </svg>
                            <div className="">
                                <h1 className="">Humidity: {item.humidity}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>


    );
}

export default WeatherInfo