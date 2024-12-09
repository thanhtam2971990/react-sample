import { useAppDispatch } from 'app/hooks';
import React, { useState } from 'react';
import { authAction, selectIsLoggedIn } from '../authSlide';
import { useSelector } from 'react-redux';

export interface LoginPageProps {
}

export default function LoginPage (props: LoginPageProps) {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLoginClick = () => {
    dispatch(authAction.login(formData))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return(
    <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
          <h2 className='p-3 text-3xl font-bold text-pink-400'>Horiz</h2>
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <h3 className='text-xl font-semibold text-blue-400 pt-2'>Sign In!</h3>
          <div className='flex space-x-2 m-4 items-center justify-center'>
             <div className="socialIcon">
             </div>
             <div className="socialIcon">
             </div>
             <div className="socialIcon">
             </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
           <input type='text'
            name="username" // Thêm name khớp với key trong formData
            value={formData.username}
            onChange={handleInputChange} 
            className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0 text-black'>

            </input>
           <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
           <button 
            onClick={handleLoginClick}
            className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
             Sign In
           </button>
          </div>
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <p className='text-blue-400 mt-4 text-sm'>Don't have an account?</p>
          <p className='text-blue-400 mb-4 text-sm font-medium cursor-pointer' >Create a New Account?</p>
       </div>
 )
}
