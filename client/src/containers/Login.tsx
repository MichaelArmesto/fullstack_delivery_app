import React, { useState } from 'react';
import { LoginBg, Logo } from '../assets';
import { LoginInput } from '../components';
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons/index";
import { motion } from "framer-motion";
import { buttonClick } from '../Animations';

import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { app } from '../config/firebase.config';
import { validateUserJwt } from '../api';

const Login: React.FC = () => {

  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [userPassword, setUserPaswword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const logInWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then(userCred => {
      firebaseAuth.onAuthStateChanged( cred => {
        if( cred ){
          cred.getIdToken().then((token) => {
            validateUserJwt(token).then((data) => {
              console.log(data);
            });
          });
        };
      });
    });
  };

  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/*BG img*/}

      <img src={LoginBg} className='w-full h-full object-cover absolute top-0 left-0' alt="" />

      {/* content box */}

      <div className='flex flex-col items-center w-[25%] md:w-500 h-full z-10 bg-lightOverlay backdrop-blur-md p-4 px-4 py12 gap-6'>
          {/* Top Logo section */}
          <div className='flex items-center justify-start gap-4 w-full'>
            <img src={Logo} className='w-8' alt="" />
            <p className='text-headingColor font-semibold text-2xl'>Citiy</p>
          </div>

          <p className='text-3xl font-semibold text-headingColor'>Welcome!</p>
          <p className='text-xl text-textColor -mt-6'>{isSignUp ? "Sign up" : "Sign in"} with following</p>

          {/* Inputs section */}

          <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-3 py-4'>
            <LoginInput 
              placeholder='Email Here' 
              icon={<FaEnvelope className='text-xl text-textColor'/>} 
              inputState={userEmail} 
              inputStateFn={setUserEmail} 
              type='email' 
              isSignUp={isSignUp}
            />
            <LoginInput 
              placeholder='Password' 
              icon={<FaLock className='text-xl text-textColor'/>} 
              inputState={userPassword} 
              inputStateFn={setUserPaswword} 
              type='password' 
              isSignUp={isSignUp}
            />
            {isSignUp && (
              <LoginInput 
              placeholder='Confirm Password' 
              icon={<FaLock className='text-xl text-textColor'/>} 
              inputState={confirm_password} 
              inputStateFn={setConfirm_password} 
              type='password' 
              isSignUp={isSignUp}
            />
            )}

            {!isSignUp ? 
              <p>Doesn't have an account? <motion.button {...buttonClick} className='text-red-400 underline cursor-pointer bg-transparent' onClick={() => setIsSignUp(true)}> Create One</motion.button></p>
              :
              <p>Already have an account? <motion.button {...buttonClick} className='text-red-400 underline cursor-pointer bg-transparent' onClick={() => setIsSignUp(false)}> Sign in</motion.button></p>
            }

            {isSignUp ? 
              <motion.button {...buttonClick} className='w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150'>
              Sign Up
            </motion.button>
            :
            <motion.button {...buttonClick} className='w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150'>
              Sign in
            </motion.button> 
          }
          </div>

          <div className='flex items-center justify-between gap-16'>
            <div className='w-24 h-[1px] rounded-md bg-white'></div>
            <p className='text-white'>or</p>
            <div className='w-24 h-[1px] rounded-md bg-white'></div>
          </div>

          <motion.button {...buttonClick} 
            className='flex items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4'
            onClick={logInWithGoogle}
          >
            <FcGoogle className='text-3xl'/>
            <p className='capitalize text-base text-headingColor'>Sign in with Google</p>
          </motion.button>
      </div>
    </div>
  )
}
export default Login;
