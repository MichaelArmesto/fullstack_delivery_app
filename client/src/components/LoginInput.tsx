import React from 'react'


interface LoginInputProps {
  placeholder: string;
  icon: React.ReactNode;
  inputState: string;
  inputStateFn: (value: string) => void;
  type: string;
  isSignUp: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({placeholder,  icon, inputState, inputStateFn, type, isSignUp}) => {
  return (
    <div className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2`}></div>
  )
}

export default LoginInput;