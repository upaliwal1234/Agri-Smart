function ResourceManagement() {
    return (
        <div className='bg-gray'>
            <div className=" rounded-lg p-6 ">
                <h1 className="text-xl text-white font-bold mb-4 ">Resource Management Tips</h1>
                <h4 className="text-white mb-4">
                    Farmers can optimize resource usage and reduce wastage by implementing the following best practices:
                </h4>
                <div className="mb-4 border border-black rounded-lg bg-[#2b9348] flex flex-col justify-center items-center">
                    <h3 className="text-lg text-white font-bold m-2">Efficient Irrigation Methods</h3>
                    <p className="text-white m-2">
                        Implement drip irrigation systems to minimize water usage. Drip irrigation delivers water directly to the roots of plants, reducing evaporation and runoff.
                    </p>
                </div>

                <div className="mb-4 border border-black rounded-lg bg-[#2b9348] flex flex-col justify-center items-center">
                    <h3 className="text-lg font-bold text-white m-2">Targeted Fertilizer Application</h3>
                    <p className="text-white m-2">
                        Use precision agriculture techniques to apply fertilizers only where they are needed. Precision agriculture technologies, such as soil sensors and satellite imagery, help farmers optimize fertilizer usage and minimize nutrient runoff.
                    </p>
                </div>
                <div className="mb-4 border border-black bg-[#2b9348] rounded-lg flex flex-col justify-center items-center">
                    <h3 className="text-lg font-bold m-2 text-white">Pest Management (IPM)</h3>
                    <p className="text-white m-2">
                        Practice integrated pest management (IPM) to reduce reliance on chemical pesticides. IPM involves using a combination of biological, cultural, and chemical control methods to manage pests while minimizing environmental impact.
                    </p>
                </div>
                <div className="mb-4 border border-black bg-[#2b9348] rounded-lg flex flex-col justify-center items-center">
                    <h3 className="text-lg font-bold text-white m-2">Crop Rotation and Cover Crops</h3>
                    <p className="text-white m-2">
                        Rotate crops and use cover crops to improve soil health and reduce erosion. Crop rotation helps break pest and disease cycles, while cover crops protect the soil from erosion and improve soil structure and fertility.
                    </p>
                </div>
                <div className='border border-black bg-[#2b9348] rounded-lg flex flex-col justify-center items-center'>
                    <h3 className="text-lg font-bold m-2 text-white">Soil Moisture Monitoring</h3>
                    <p className="text-white m-2">
                        Regularly monitor soil moisture levels to optimize irrigation scheduling. Soil moisture sensors and weather data can help farmers determine when and how much to irrigate, reducing water waste and improving crop yields.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ResourceManagement