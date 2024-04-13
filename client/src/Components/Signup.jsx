import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import baseURL from '../DB';
function Signup() {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();
    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${baseURL}/register`, data);
            if (response) {
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
        console.log(data);
    };

    // Destructure data
    const { name, email, password } = data;

    // Disable submit button until all fields are filled in
    const canSubmit = [name, email, password].every(Boolean);


    return (
        <div className="flex items-center justify-center w-full h-[90vh] bg-black bg-opacity-10 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                <div className='flex justify-between mb-5'>
                    <h1 className='text-gray-600 text-3xl font-semibold'>Sign Up</h1>
                </div>
                <form
                    onSubmit={handleRegistration}
                    className="group"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                pattern="[a-zA-Z ]{2,}"
                                required
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        name: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Name is required
                            </span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500  [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                autoComplete="off"
                                required
                                pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        email: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Please enter a valid email address.{' '}
                            </span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-900 d"
                        >
                            Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500  [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                autoComplete="off"
                                required
                                pattern="[0-9a-zA-Z]{6,}"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        password: e.target.value
                                    });
                                }}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Password must be at least 6 characters.{' '}
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password_confirmation"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Confirm Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm password"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                autoComplete="off"
                                required
                                pattern={password}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span className="mt-1 hidden text-sm text-red-400">
                                Confirm Password must be same as Password{' '}
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
                <div className="text-md mt-4 text-zinc-600 ">
                    Already have an account?{' '}
                    <span>
                        <Link
                            to="/login"
                            className="text-[#2b9348] hover:text-[#007f5f] hover:underline "
                        >
                            Login
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Signup
