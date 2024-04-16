import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { AppState } from "../Context/AgriProvider";
import axios from "axios";
import baseURL from "../DB";
import { toast } from "react-toastify";

function InventoryForm({ setForm }) {
    const [data, setData] = useState({
        cropName: '',
        amount: '',
        season: 'rabi',
        year: ''
    });
    const navigate = useNavigate();
    const { user, setIsLoading } = AppState();
    const handleSave = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseURL}/api/analysis/inventory`, {
                userId: user.id,
                cropName: data.cropName,
                amount: data.amount,
                season: data.season,
                year: data.year
            });
            if (response.data) {
                setIsLoading(false);
                setForm(false);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error.request && error.request.status === 0) {
                toast.error(error.message)
            } else {
                toast.error(error.request.response)
            }
            console.log(error);
        }
    }
    
    return (
        <div className="flex justify-center  min-h-screen">
            <div className='mt-12 w-4/5 sm:w-3/5'>
                <form className="bg-white overflow-hidden shadow rounded-lg border w-full">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Inventory
                        </h3>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm my-auto font-medium text-gray-500">
                                    Crop Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" id="name" name='name' value={data.cropName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-1.5 " placeholder="Enter Crop Name" required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                cropName: e.target.value
                                            });
                                        }}
                                    />
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm my-auto font-medium text-gray-500">
                                    Amount
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="number" id="amount" name='amount' value={data.amount} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-1.5 " placeholder="Enter Amount" required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                amount: e.target.value
                                            });
                                        }}
                                    />
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm my-auto font-medium text-gray-500">
                                    Season
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <select id="season" name='season' defaultValue={data.season} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-1.5 " placeholder="Enter Season" required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                season: e.target.value
                                            });
                                        }}
                                    >
                                        <option value="rabi">Rabi</option>
                                        <option value="kharif">Kharif</option>
                                        <option value="zaid">Zaid</option>
                                    </select>
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm my-auto font-medium text-gray-500">
                                    Year
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="year" id="year" name='year' defaultValue={data.year} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-1.5 " placeholder="Enter Year" required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                year: e.target.value
                                            });
                                        }}
                                    />
                                </dd>
                            </div>
                            <div></div>
                        </dl>
                    </div>
                    <div className='flex justify-between py-3 px-5'>
                        <button onClick={() => setForm(false)} className='bg-[#2b9348] text-white hover:bg-opacity-60 font-bold py-2 px-8 rounded-md transition duration-300 ease-in-out' >Cancel</button>
                        <button onClick={handleSave} className='bg-[#2b9348] text-white hover:bg-opacity-60 font-bold py-2 px-8 rounded-md transition duration-300 ease-in-out' >Save</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default InventoryForm
