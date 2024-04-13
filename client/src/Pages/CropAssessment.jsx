import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import CropAssessmentDetails from '../Components/CropAssessmentDetails';
import CropAssessmentForm from '../Components/CropAssessmentForm';

function CropAssessment() {
    const data = [
        { id: '123', name: 'Rice', imageURL: 'image.png', details: 'rice crop' },
        { id: '124', name: 'Rice', imageURL: 'image.png', details: 'rice crop' },
        { id: '125', name: 'Rice', imageURL: 'image.png', details: 'rice crop' },
        { id: '126', name: 'Rice', imageURL: 'image.png', details: 'rice crop' },
        { id: '127', name: 'Rice', imageURL: 'image.png', details: 'rice crop' },
        { id: '128', name: 'Rice', imageURL: 'image.png', details: 'rice crop' },
    ];
    const [crops, setCrops] = useState(data);

    return (
        <div>
            <CropAssessmentForm setCrops={setCrops} />
            {/* <CropAssessmentDetails data={data} /> */}

        </div>
    )
}

export default CropAssessment;
