import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { fadeInOut } from '../Animations';

interface LoginInputProps {
  placeholder: string;
  icon: React.ReactNode;
  inputState: string;
  inputStateFn: (value: string) => void;
  type: string;
  isSignUp: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({placeholder,  icon, inputState, inputStateFn, type, isSignUp}) => {

    const [isFocus, setIsFocus] = useState(false);
  return (
    <motion.div {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2 ${isFocus ? "shadow-md shadow-red-400" : "shadow-none"}`}>
      {icon}
      <input 
        type={type} 
        placeholder={placeholder} 
        className='w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none'
        value={inputState}
        onChange={(e) => inputStateFn(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        />
    </motion.div>
  )
}

export default LoginInput;