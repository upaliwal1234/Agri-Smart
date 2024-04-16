import React, { useState, useEffect } from "react";
import axios from 'axios';
import baseURL from '../DB.js';
import { useNavigate } from 'react-router-dom';

function IrrigationInfo() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [crop, setCrop] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/irrigation/search/autoComplete/${searchTerm}`);
            setSuggestions(Array.isArray(response.data) ? response.data : []);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            handleSearch();
        }, 2000);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleClick = async (e) => {
        e.preventDefault();
        fetchData();
    }

    const fetchData = async () => {
        try {
            let response = await axios.get(`${baseURL}/api/irrigation/irrigationschedule/${searchTerm}`);
            if (response.status === 200) {
                let data = response.data;
                setCrop(data);
                setSearchTerm('');
                setSuggestions([]);
            }
        } catch (err) {
            console.error('Error in fetching data', err);
        }
    }

    const handleSuggestionClick = (cropName) => {
        setSearchTerm(cropName);
        setSuggestions([]);
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="self-center">
                <form onSubmit={handleClick} className='rounded-md mt-5 bg-gray-100 px-1 py-1 flex gap-2 relative'>
                    <input
                        className="flex h-10  w-[500px] rounded-md bg-gray-100 border border-green-600 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search For Crops"
                    />
                    <button className='border border-green-600' type='submit'>
                        <svg className='w-5 fill-gray-500 mr-1 hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </button>
                </form>
                <ul className="absolute z-10 bg-white border border-gray-200 rounded-md shadow-md w-[250px] mt-2">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion.crop)} className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                            <svg className="absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {suggestion.crop}
                        </li>
                    ))}
                </ul>
            </div>
            {crop && (
                <div className="flex flex-col mt-8 p-4 bg-gray-100 border border-green-600 shadow-md rounded-lg">
                    <img
                        src={crop.imageURL}
                        alt="Irrigation"
                        className="w-48 m-4 h-48 self-center object-cover rounded-lg mb-8"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                        <div className="field flex flex-row justify-around border border-black bg-green-600">
                            <label htmlFor="field1" className="text-lg self-center font-medium text-white">Field 1</label>
                            <div className="py-2 px-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
                                {crop.crop}
                            </div>
                        </div>
                        <div className="field flex flex-row justify-around border border-black bg-green-600">
                            <label htmlFor="field2" className="block self-center text-lg font-medium text-white">Field 2</label>
                            <div className="py-2 px-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
                                {crop.bestPractices}
                            </div>
                        </div>
                        <div className="field flex flex-row justify-around border border-black bg-green-600">
                            <label htmlFor="field3" className="block text-lg self-center font-medium text-white">Field 3</label>
                            <div className="py-2 px-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
                                {crop.schedule}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IrrigationInfo;
