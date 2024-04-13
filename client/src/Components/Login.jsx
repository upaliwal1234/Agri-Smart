import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import baseURL from '../DB';
function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${baseURL}/login`, data);
            if (response.status == 200) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
        // console.log(data);
    };

    // Destructure data



    return (
        <div className="flex z-[100] items-center justify-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
            <div id='container' className="flex w-full flex-col items-center py-10 sm:justify-center">
                <div className="w-full max-w-md rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-gray-600 text-3xl font-semibold'>Log In</h1>
                    </div>
                    <form
                        onSubmit={handleLogin}
                        className="group"
                    >
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
                                    // pattern="[0-9a-zA-Z]{6,}"
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            password: e.target.value
                                        });
                                    }}
                                />
                                {/* <span className="mt-1 hidden text-sm text-red-400">
                                    Password must be at least 6 characters.{' '}
                                </span> */}
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <button
                                type="submit"
                                className="mt-2 w-full rounded-lg bg-red-400 px-5 py-3 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 group-invalid:pointer-events-none group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:opacity-70"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="text-md mt-4 text-zinc-600 ">
                        Don&apos;t have an account?{' '}
                        <span>
                            <Link
                                to="/signup"
                                className="text-red-600 hover:text-red-800 hover:underline "
                            >
                                Register
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login
