import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tokenCheck } from "../HelperToken";
import { Link } from "react-router-dom";

function Home() {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const token = tokenCheck();
    // if (!token) {
    //     navigate('/login')
    // }
    // }, [])
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center my-5">Home</h1>
            <div className="w-full h-[500px] py-10">
                <div className="h-full w-4/5 md:w-3/5 mx-auto flex flex-col gap-3 sm:gap-6 md:gap-8 text-gray-100">
                    <div className="flex flex-row w-full h-1/2 gap-3 sm:gap-6 md:gap-8">
                        <div className="flex justify-center items-center w-1/2 bg-cover  bg-[url('https://images.nationalgeographic.org/image/upload/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg')] h-full rounded-lg hover:bg-opacity-60 hover:scale-105 hover:transform hover:duration-300">
                            <Link to='/cropassessment' className="w-full h-full">
                                <div className="flex justify-center items-center w-full h-full rounded-lg bg-black bg-opacity-30 hover:bg-opacity-60 ">
                                    <h1 className="text:xl md:text-2xl lg:text-3xl font-bold">Crop Assessment</h1>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center w-1/2 bg-cover  bg-[url('https://png.pngtree.com/background/20230818/original/pngtree-irrigation-in-a-field-farm-solid-set-irrigation-watering-photo-picture-image_4729181.jpg')] h-full rounded-lg hover:bg-opacity-60 hover:scale-105 hover:transform hover:duration-300">
                            <Link to='/irrigationinfo' className="w-full h-full">
                                <div className="flex justify-center items-center w-full h-full rounded-lg bg-black bg-opacity-30 hover:bg-opacity-60 ">
                                    <h1 className="text:xl md:text-2xl lg:text-3xl font-bold">Irrigation Info.</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row w-full h-1/2 gap-3 sm:gap-6 md:gap-8">
                        <div className="flex justify-center items-center w-1/2 bg-cover  bg-[url('https://c1.wallpaperflare.com/preview/490/671/770/nature-summer-weather-fluffy.jpg')] h-full rounded-lg hover:bg-opacity-60 hover:scale-105 hover:transform hover:duration-300">
                            <Link to='/weatherinfo' className="w-full h-full">
                                <div className="flex justify-center items-center w-full h-full rounded-lg bg-black bg-opacity-30 hover:bg-opacity-60 ">
                                    <h1 className="text:xl md:text-2xl lg:text-3xl font-bold">Weather Info.</h1>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center w-1/2 bg-cover  bg-[url('https://st3.depositphotos.com/1177973/16777/i/450/depositphotos_167777246-stock-photo-woman-holding-wheat-spikelets-in.jpg')] h-full rounded-lg hover:bg-opacity-60 hover:scale-105 hover:transform hover:duration-300">
                            <Link to='/resourcemanagement' className="w-full h-full">
                                <div className="flex justify-center items-center w-full h-full rounded-lg bg-black bg-opacity-30 hover:bg-opacity-60 ">
                                    <h1 className="text:xl md:text-2xl lg:text-3xl font-bold">Resource Management Info.</h1>
                                </div>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Home