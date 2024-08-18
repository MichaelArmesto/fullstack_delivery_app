import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Logo } from '../assets';
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import { motion } from 'framer-motion';
import { buttonClick, slideTop } from '../Animations';
import {MdLogout, MdShoppingCart} from '../assets/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../context/reducers';

const Header: React.FC = () => {

    const user = useSelector((state: RootState) => state.user)
    const [isMenu, setIsMenu] = useState(false);

  return <header className='fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6'>
        <NavLink to={'/'} className='flex items-center justify-center gap-4'>
            <img src={Logo} alt="logo" className='w-12'/>
            <p className='font-semibold text-xl'>City</p>
        </NavLink>

        <nav className='flex items-center justify-center gap-8'>
            <ul className='hidden md:flex items-center justify-center gap-16'>
                <NavLink className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles} to={'/'}>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles} to={'/menu'}>Menu</NavLink>
                <NavLink className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles} to={'/services'}>Services</NavLink>
                <NavLink className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles} to={'/aboutus'}>About Us</NavLink>
            </ul>

            <motion.div {...buttonClick} className='relative cursor-pointer'>
                <MdShoppingCart className='text-3xl text-textColor'/>
                <div className='w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1'>
                    <p className='text-primary text-base font-semibolds'>2</p>
                </div>
            </motion.div>

            {user ? <>
                <div className='relative cursor-pointer' onMouseEnter={() => setIsMenu(true)}>
                    <div className='w-12 h-12 rounded-full cursor-pointer overflow-hidden shadow-md flex items-center justify-center'>
                        <motion.img  className='w-full h-full object-cover' src={user?.user?.picture? user.user.picture : Avatar} whileHover={{scale: 1.15}} referrerPolicy='no-referrer'/>
                    </div>
                </div>

                {isMenu && <motion.div {...slideTop} onMouseLeave={() => setIsMenu(false)} className='px-6 py-4 bg-lightOverlay backdrop-blur-md rounded-md shadow-md absolute top-16 right-24 flex flex-col gap-4'>
                    <Link to={'/dashboard/home'} className='hover:text-red-500 text-xl text-textColor'>Dashboard</Link>
                    <Link to={'/profile'} className='hover:text-red-500 text-xl text-textColor'>Profile</Link>
                    <Link to={'/orders'} className='hover:text-red-500 text-xl text-textColor'>Orders</Link>
                    <hr />
                    <motion.div {...buttonClick} className='group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-200 hover:bg-gray-300 gap-3 cursor-pointer'>
                        <MdLogout className='text-2xl text-textColor group-hover::text-headingColor'/>
                        <p className='text-textColor text-xl group-hover:text-headingColor'>Sign Out</p>
                    </motion.div>
                </motion.div>}
            </> : <>
                <NavLink to={'/login'}>
                    <motion.button {...buttonClick} className='px-4 py2 rounded-md shadow-md bg-lightOverlay border border-red-300 cursor-pointer'>
                        Login
                    </motion.button>
                </NavLink>
            </>}
        </nav>
  </header>
}

export default Header;