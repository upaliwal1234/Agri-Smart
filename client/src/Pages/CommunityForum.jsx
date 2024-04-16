import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AppState } from "../Context/AgriProvider";
import axios from "axios";
import baseURL from "../DB";
import { toast } from "react-toastify";
function CommunityForum() {
    // const dummy = [
    //     {
    //         id: '123',
    //         name: "Shuhbam",
    //         title: "How to do farming?",
    //         text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate. Dolores dolorem dolorum neque illum earum aliquid expedita architecto cumque. Ex obcaecati facere nam perspiciatis voluptatum fuga nobis neque, repellat odit aliquam fugiat, ratione itaque, vel officiis. Harum atque, non accusantium, omnis consectetur nesciunt, labore tempore dolorem debitis veritatis autem?",
    //         reply: [{ id: '12', name: 'utkarsh', reply: 'Very nice post' }],
    //         createdAt: '15-04-2024',
    //         updatedAt: '',
    //     },
    //     {
    //         id: '123',
    //         name: "Shuhbam",
    //         title: "How to do farming?",
    //         text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate. Dolores dolorem dolorum neque illum earum aliquid expedita architecto cumque. Ex obcaecati facere nam perspiciatis voluptatum fuga nobis neque, repellat odit aliquam fugiat, ratione itaque, vel officiis. Harum atque, non accusantium, omnis consectetur nesciunt, labore tempore dolorem debitis veritatis autem?",
    //         reply: [{ id: '12', name: 'utkarsh', reply: 'Very nice post' }],
    //         createdAt: '15-04-2024',
    //         updatedAt: '',
    //     },
    //     {
    //         id: '123',
    //         name: "Shuhbam",
    //         title: "How to do farming?",
    //         text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate. Dolores dolorem dolorum neque illum earum aliquid expedita architecto cumque. Ex obcaecati facere nam perspiciatis voluptatum fuga nobis neque, repellat odit aliquam fugiat, ratione itaque, vel officiis. Harum atque, non accusantium, omnis consectetur nesciunt, labore tempore dolorem debitis veritatis autem?",
    //         reply: [{ id: '12', name: 'utkarsh', reply: 'Very nice post' }],
    //         createdAt: '15-04-2024',
    //         updatedAt: '',
    //     },
    //     {
    //         id: '123',
    //         name: "Shuhbam",
    //         title: "How to do farming?",
    //         text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate. Dolores dolorem dolorum neque illum earum aliquid expedita architecto cumque. Ex obcaecati facere nam perspiciatis voluptatum fuga nobis neque, repellat odit aliquam fugiat, ratione itaque, vel officiis. Harum atque, non accusantium, omnis consectetur nesciunt, labore tempore dolorem debitis veritatis autem?",
    //         reply: [{ id: '12', name: 'utkarsh', reply: 'Very nice post' }],
    //         createdAt: '15-04-2024',
    //         updatedAt: '',
    //     },
    //     {
    //         id: '123',
    //         name: "Shuhbam",
    //         title: "How to do farming?",
    //         text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate. Dolores dolorem dolorum neque illum earum aliquid expedita architecto cumque. Ex obcaecati facere nam perspiciatis voluptatum fuga nobis neque, repellat odit aliquam fugiat, ratione itaque, vel officiis. Harum atque, non accusantium, omnis consectetur nesciunt, labore tempore dolorem debitis veritatis autem?",
    //         reply: [{ id: '12', name: 'utkarsh', reply: 'Very nice post' }],
    //         createdAt: '15-04-2024',
    //         updatedAt: '',
    //     },
    //     {
    //         id: '123',
    //         name: "Shuhbam",
    //         title: "How to do farming?",
    //         text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate. Dolores dolorem dolorum neque illum earum aliquid expedita architecto cumque. Ex obcaecati facere nam perspiciatis voluptatum fuga nobis neque, repellat odit aliquam fugiat, ratione itaque, vel officiis. Harum atque, non accusantium, omnis consectetur nesciunt, labore tempore dolorem debitis veritatis autem?",
    //         reply: [{ id: '12', name: 'utkarsh', reply: 'Very nice post' }],
    //         createdAt: '15-04-2024',
    //         updatedAt: '',
    //     },
    // ]

    const [posts, setPosts] = useState();
    const navigate = useNavigate();

    const { setIsLoading } = AppState();

    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${baseURL}/api/posts/getPosts`);
            if (data) {
                setPosts(data);
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
        fetchPosts();
    }, [])
    return (
        <div className="flex items-center justify-center w-full my-10 ">
            <div className="w-full md:w-10/12 flex flex-col gap-3 rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                        <h1 className="text-center text-3xl text-gray-800">Community Forum</h1>
                    </div>
                    <div className="w-28 h-10 bg-[#2b9348] rounded-md hover:transform hover:scale-110 hover:duration-300 hover:bg-[#007f5f]">
                        <button onClick={() => { navigate('/communityforum/addpost') }} className="text-white text-center w-full h-full rounded-md">Add Post</button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    {posts && posts.map((post, index) => (
                        <div key={index} className="border-t pt-4 mt-2 border-gray-100">
                            <div className="flex flex-row justify-between">
                                <button onClick={() => { navigate(`post/${post._id}`) }} className="text-xl md:text-2xl text-[#2b9348]">{post.title}</button>
                                <div className="flex justify-between gap-2 items-center">
                                    <h1 className="text-sm font-semibold hover:decoration-emerald-700">~{post.name}</h1>
                                    <h1 className="text-sm text-gray-500">on {(new Date(post.createdAt)).toLocaleDateString()}</h1>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">{(post.text).substr(0, 300)}...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommunityForum