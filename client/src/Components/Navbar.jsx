import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { tokenCheck } from '../HelperToken';
import { AppState } from '../Context/AgriProvider'
function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const { setUser } = AppState();
    useEffect(() => {
        const token = tokenCheck();
        if (token) {
            setLoggedIn(true);
        }
    }, [])
    const navigate = useNavigate();
    const [logoutMenu, setLogoutMenu] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem('myToken');
        setLoggedIn(false);
        setLogoutMenu(false);
        navigate('/login')
    }
    return (
        <div className='bg-[#2b9348]'>
            <div className='text-white flex flex-row justify-between h-[80px] items-center px-4 font-light '>
                <div className='md:w-1/3 text-sm md:pl-48'>
                    <NavLink className='text-4xl font-bold'>Agri Smart</NavLink>
                </div>
                <div className={`md:w-1/3 text-xl flex flex-row justify-center md:gap-10 ${loggedIn ? '' : 'hidden'}`}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink>Inventory</NavLink>
                    <NavLink>Community Forum</NavLink>
                </div>
                <div className='md:w-1/3 text-xl flex flex-row justify-center md:gap-10'>
                    {loggedIn ? (
                        <div>
                            <button onClick={() => setLogoutMenu(true)}>Logout</button>
                            <div className={`absolute mt-5 right-2 w-[280px] h-[80px] border  rounded ${logoutMenu ? '' : 'hidden'}`}>
                                <div className="bg-gray-100 p-1 px-3 w-full h-full  rounded">
                                    <h1 className="text-2xl text-gray-700">Are you sure to logout?</h1>
                                    <div className="mt-1 flex justify-between">
                                        <div className="w-[50px] h-[30px] bg-[#2b9348] rounded">
                                            <button onClick={handleLogout} className="w-full h-full text-gray-100">Yes</button>
                                        </div>
                                        <div className="w-[50px] h-[30px] bg-[#2b9348] rounded">
                                            <button onClick={() => setLogoutMenu(false)} className="w-full h-full text-gray-100">No</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <NavLink to='/login'>Log In</NavLink>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar