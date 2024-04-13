import { useState } from "react";

function CropAssessmentForm({ setCrops }) {
    const [data, setData] = useState();
    const [canSubmit, setCanSubmit] = useState(false);
    const handleSearch = () => {

    }
    return (
        <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-md my-10 rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                <div className='flex justify-between mb-5'>
                    <h1 className='text-gray-600 text-3xl font-semibold text-center w-full'>Crop Assessment</h1>
                </div>
                <form
                    onSubmit={handleSearch}
                    className="group"
                >
                    <div>
                        <label
                            htmlFor="nitrogen"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Nitrogen
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                id='nitrogen'
                                type="number"
                                name="nitrogen"
                                placeholder="Nitrogen Percent in the soil"
                                min="0"
                                max="100"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                pattern="[0-9]{1,}"
                                required
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        nitrogen: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Value should be between 0 and 100
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="potassium"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Potassium
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                id='potassium'
                                type="number"
                                name="potassium"
                                placeholder="Potassium Percent in the soil"
                                min="0"
                                max="100"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                pattern="[0-9]{1,}"
                                required
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        potassium: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Value should be between 0 and 100
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="phosphorous"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Phosphorous
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                id='phosphorous'
                                type="number"
                                name="phosphorous"
                                placeholder="Phosphorous Percent in the soil"
                                min="0"
                                max="100"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                pattern="[0-9]{1,}"
                                required
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        phosphorous: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Value should be between 0 and 100
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="PH"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            pH
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                id='PH'
                                type="number"
                                name="PH"
                                placeholder="pH of the soil"
                                min="0"
                                max="14"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                pattern="[0-9]{1,}"
                                required
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        PH: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Value should be between 0 and 14
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="temperature"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Temperature
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                id='temperature'
                                type="number"
                                name="temperature"
                                placeholder="Average Temperature of the Area in ºCelcius"
                                min="-100"
                                max="100"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                pattern="[-9-9]{1,}"
                                required
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        potassium: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Value should be between -100 and 100
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="potassium"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Potassium
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                id='potassium'
                                type="number"
                                name="potassium"
                                placeholder="Potassium Percent in the soil"
                                min="0"
                                max="100"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                pattern="[0-9]{1,}"
                                required
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        potassium: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Value should be between 0 and 100
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="potassium"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Potassium
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                id='potassium'
                                type="number"
                                name="potassium"
                                placeholder="Potassium Percent in the soil"
                                min="0"
                                max="100"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                pattern="[0-9]{1,}"
                                required
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        potassium: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Value should be between 0 and 100
                            </span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
                        <button
                            type="submit"
                            disabled={!canSubmit}
                            className="mt-2 w-full rounded-lg bg-[#2b9348] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[#007f5f] focus:outline-none focus:ring-1 focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 group-invalid:pointer-events-none group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:opacity-70"
                        >
                            Create account
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CropAssessmentForm