import { motion } from 'framer-motion';
import React from 'react';
import { fadeInOut } from '../Animations';
import { FaCheck, BsExclamationTriangleFill,  } from '../assets/icons/index'
import { BsExclamation, BsExclamationTriangle } from 'react-icons/bs';


interface AlertInputs {
    type: string,
    message: string,
}

const Alert: React.FC<AlertInputs> = ({type, message}) => {
    if(type === 'SUCCESS'){
        return (
            <motion.div {...fadeInOut} className='fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-emerald-300 shadow-md flex items-center gap-4'>
                <FaCheck className='text-xl text-emerald-700 '/>
                <p className='text-xl text-emerald-700'>{message}</p>
            </motion.div>
          )
    }
    if(type === 'WARNING'){
        return (
            <motion.div {...fadeInOut} className='fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-orangered-300 shadow-md flex items-center gap-4'>
                <BsExclamationTriangleFill className='text-xl text-orange-700 '/>
                <p className='text-xl text-orange-700'>{message}</p>
            </motion.div>
          )
    }
    if(type === 'INFO'){
        return (
            <motion.div {...fadeInOut} className='fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-blue-300 shadow-md flex items-center gap-4'>
                <BsExclamation className='text-xl text-blue-700 '/>
                <p className='text-xl text-blue-700'>{message}</p>
            </motion.div>
          )
    }
    if(type === 'DANGER'){
        return (
            <motion.div {...fadeInOut} className='fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-red-300 shadow-md flex items-center gap-4'>
                <BsExclamationTriangleFill className='text-xl text-red-700 '/>
                <p className='text-xl text-red-700'>{message}</p>
            </motion.div>
          )
    }
    else{
        return null;
    }
}

export default Alert;