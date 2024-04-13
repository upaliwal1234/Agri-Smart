import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function CropAssessmentDetails({ data }) {
    const [crops, setCrops] = useState(data);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Based on your search, here are some results.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {crops.map(crop => (
                    <div key={crop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={crop.imageUrl} alt={crop.name} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{crop.name}</h3>
                            <p className="text-sm text-gray-600">{crop.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CropAssessmentDetails;
