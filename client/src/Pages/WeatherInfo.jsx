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
                <div key={index} className="flex flex-row m-2 bg-[#2b9348] rounded-lg justify-around border border-black w-3/5 p-4 hover:bg-green-800">
                    <h6 className="text-lg  mb-2">Day: {item.date}<br/>Date: {item.date}</h6>
                    <p>Temperature: {item.temperature}</p>
                    <p>Wind Speed: {item.windSpeed}</p>
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

    );
}

export default WeatherInfo