import { useState } from "react";
import { AppState } from '../Context/AgriProvider';
import axios from "axios";
import { toast } from 'react-toastify'
import baseURL from "../DB";
import { useNavigate } from "react-router-dom";

function AddPosts() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const handleChange1 = (e) => {
        setTitle(e.target.value);
    }
    const handleChange2 = (e) => {
        setText(e.target.value);
    }
    const { user, setIsLoading } = AppState();
    const handleAddPost = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseURL}/api/posts/addPost`, {
                id: user.id,
                name: name,
                title: title,
                text: text
            });
            if (response && response.data) {
                setIsLoading(false);
                navigate('/communityforum');
            }
        } catch (error) {
            setIsLoading(false);
            if (error.request && error.request.status === 0) {
                toast.error(error.message)
            }
            else {
                toast.error(error.request.response)
            }
            console.log(error);
        }
    }
    return (
        <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-lg  h-[500px] my-10 rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                <div className='flex justify-between mb-5'>
                    <h1 className='text-gray-600 text-3xl font-semibold text-center w-full'>Your Post</h1>
                </div>
                <form
                    onSubmit={handleAddPost}
                    className="group"
                >
                    
                    <div className="mt-4">
                        <label
                            htmlFor="title"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Title
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                id='title'
                                type="text"
                                value={title}
                                placeholder="Enter Title"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                required
                                onChange={handleChange1}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="text"
                            className="mb-2 block text-sm font-medium text-gray-900 "
                        >
                            Text
                        </label>
                        <div className="flex flex-col items-start">
                            <textarea
                                id='text'
                                type="text"
                                value={text}
                                placeholder="Enter Your Comment"
                                className="block w-full h-36 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-red-500 focus:ring-red-500   [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                required
                                onChange={handleChange2}
                            />

                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
                        <button
                            type="submit"
                            className="mt-12 w-full rounded-lg bg-[#2b9348] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[#007f5f] focus:outline-none focus:ring-1 focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 group-invalid:pointer-events-none group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:opacity-70"
                        >
                            Add Post
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddPosts