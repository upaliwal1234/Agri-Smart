/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function CropAssessmentDetails({ crops, setCrops }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Based on the details you provided, here is the crop best suitable for your farm.</h2>
            <div className="flex flex-col items-center justify-center">
                <div className="md:w-2/5 flex justify-center items-center bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h3 className="text-6xl text-gray-500 text-center font-semibold mb-2">{(crops.prediction).toUpperCase()}</h3>
                    </div>
                </div>
                <div className='flex justify-center w-[100px] bg-[#2b9348] h-[40px] mt-4 text-white rounded-md hover:scale-110 hover:transform hover:duration-300 shadow-lg'>
                    <button onClick={() => setCrops(undefined)} className='w-full h-full text-center'>Try Again</button>
                </div>
            </div>
        </div>
    );
}

export default CropAssessmentDetails;
