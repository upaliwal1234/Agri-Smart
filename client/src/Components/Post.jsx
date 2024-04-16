import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppState } from "../Context/AgriProvider";
import axios from "axios";
import baseURL from "../DB";
import { toast } from "react-toastify";

function Post() {
    const { id } = useParams();
    const { setIsLoading, user } = AppState();
    const [post, setPost] = useState({});

    const [text, setText] = useState('');
    // console.log(text);

    const handleReply = async () => {
        try {
            setIsLoading(true);
            let { data } = await axios.post(`${baseURL}/api/posts/addReply`, {
                postId: id,
                text,
                userId: user.id
            });
            if (data) {
                setText('');
                setIsLoading(false);
                fetchPost();
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
    const fetchPost = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${baseURL}/api/posts/getPost/${id}`);
            if (data) {
                console.log(data);
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
        <div className="flex items-center justify-center w-full py-10 ">
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
                <div className="flex flex-col gap-3 border-t py-5">
                    <div className="flex flex-row gap-10">
                        <h1 className="text-xl font-semibold">Add a Reply</h1>
                        <div className="flex flex-col align-right gap-2 items-end">
                            <textarea onChange={(e) => setText(e.target.value)} value={text} className="border rounded-md p-2" name="name" id="" cols="70" rows="3"></textarea>
                            <button onClick={handleReply} className="w-12 rounded p-1 bg-[#2b9348] text-white">Add</button>
                        </div>
                    </div>
                    <div className="border-t">
                        <h1 className="text-xl font-semibold">Replies</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        {post.reply && post.reply.map((data, index) => (
                            <div key={index} className="border-t py-1">
                                <div className="flex flex-row gap-2 justify-between items-center">
                                    <h1 className="text-md text-gray-700 font-semibold">{data.name}</h1>
                                    <h2 className="text-gray-400 text-sm">{(new Date(data.createdAt)).toLocaleDateString()}</h2>
                                </div>
                                <p className="text-gray-500 text-sm">{data.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post