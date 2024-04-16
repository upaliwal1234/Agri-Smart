import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppState } from "../Context/AgriProvider";
import axios from "axios";
import baseURL from "../DB";
import { toast } from "react-toastify";

function Post() {
    const { id } = useParams();
    const { setIsLoading } = AppState();

    const [post, setPost] = useState({});
    const fetchPost = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${baseURL}/api/posts/getPost/${id}`);
            if (data) {
                setPost(data);
                setIsLoading(false);
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
    useEffect(() => {
        fetchPost();
    }, [])
    return (
        <div className="flex items-center justify-center w-full my-10 ">
            <div className="w-full md:w-10/12 flex flex-col gap-3 rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                <div className="flex flex-col gap-4 my-3">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="text-xl md:text-2xl my-1 text-[#2b9348]">{post.title}</h1>
                        <div className="flex gap-2 items-center">
                            <h1 className="text-sm font-semibold hover:decoration-emerald-700">~{post.name}</h1>
                            <h1 className="text-sm text-gray-500">on {(new Date(post.createdAt)).toLocaleDateString()}</h1>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">{post.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Post