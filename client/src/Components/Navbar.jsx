import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { tokenCheck } from '../HelperToken';

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true);
    useEffect(() => {
        const token = tokenCheck();
        if (token) {
            setLoggedIn(true);
        }
    }, [])
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
                        <button>Logout</button>
                    ) : (
                        <NavLink to='/login'>Log In</NavLink>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar