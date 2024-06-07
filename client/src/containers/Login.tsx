import React, { useState } from 'react'
import { LoginBg, Logo } from '../assets';
import { LoginInput } from '../components';

const Login: React.FC = () => {

  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/*BG img*/}

      <img src={LoginBg} className='w-full h-full object-cover absolute top-0 left-0' alt="" />

      {/* content box */}

      <div className='flex flex-col items-center w-[20%] md:w-500 h-full z-10 bg-lightOverlay backdrop-blur-md p-4 px-4 py12 gap-6'>
          {/* Top Logo section */}
          <div className='flex items-center justify-start gap-4 w-full'>
            <img src={Logo} className='w-8' alt="" />
            <p className='text-headingColor font-semibold text-2xl'>Citiy</p>
          </div>

          <p className='text-3xl font-semibold text-headingColor'>Welcome!</p>
          <p className='text-xl text-textColor -mt-6'>Sign in with following</p>

          {/* Inputs section */}

          <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
            <LoginInput placeholder='Email Here' icon="" inputState={userEmail} inputStateFn={setUserEmail} type='email' isSignUp={isSignUp}/>
          </div>
      </div>

    </div>
  )
}

export default Login;
