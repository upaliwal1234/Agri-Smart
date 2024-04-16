import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import baseURL from '../DB.js';
import ProfileEdit from '../Components/ProfileEdit.jsx';
import { AppState } from '../Context/AgriProvider';


function Profile() {
    const [User, setUser] = useState({
        username: '',
        email: '',
        cityName: '',
    });
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const { user, setIsLoading } = AppState();
    // console.log(user);
    const DisplayDetails = async () => {
        setIsLoading(true);
        try {
            if (!user) {
                return;
            }
            const { data } = await axios.get(`${baseURL}/api/user/profile/${user.id}`);

            setUser(data);
            setName(data.username);
            setEmail(data.email);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error :', error);
        }
    };

    const handleSave = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.patch(`${baseURL}/api/user/profile/edit/${user.id}`, {
                username: User.username,
                email: User.email,
                cityName: User.cityName
            })
            if (response.status == 200) {

                setEdit(false);
                setIsLoading(false);
                DisplayDetails();
            }
            else {
                toast.error('Unable to Save Changes');
            }
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            console.error('Error: ', error);
        }
    }

    useEffect(() => {
        DisplayDetails();
    }, [user])
    return (
        <>
            {edit ? (
                <ProfileEdit setEdit={setEdit} user={User} save={handleSave} setUser={setUser} />
            ) : (

                <div className="flex justify-center h-full">
                    <div className='mt-12 w-4/5 sm:w-3/5'>
                        <div className="bg-white overflow-hidden shadow rounded-lg border w-full">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    User Profile
                                </h3>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Name
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {User.username}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Email address
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {User.email}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Location
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {User.cityName ? User.cityName : "Please set your location"}
                                        </dd>
                                    </div>
                                    <div></div>
                                </dl>
                            </div>
                            <div className='text-right py-3 px-5'>
                                <button onClick={() => setEdit(true)} className='bg-[#2b9348] text-white hover:bg-opacity-60 font-bold py-2 px-8 rounded-md transition duration-300 ease-in-out' >Edit</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
