import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

const timeFormat = (update_time) => {
  const date = new Date(update_time);
  const time = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric' });
  return time
}

  return (
    isAuthenticated && (
      <div className='flex flex-col justify-center items-center gap-6'>
       <NavBar />
       <p className='overline decoration-[#ff583e] decoration-2 text-3xl mb-4 text-center'>Personal Information</p>
       <p className='text-center text-neutral-500 italic text-md w-[60%]'>You can find here all about your personal information </p>
       <div className='bg-gray-100 w-fit lg:w-[50%] flex flex-col justify-center items-center shadow-md shadow-gray-500 rounded p-6 m-10'>
          <p className='lg:self-start font-bold'>Account setting</p>
          <div className='flex flex-col gap-4'>
            <img id='img' src={ user.picture } alt={ user.name } className='self-center rounded-full p-4 h-[100px] w-[100px]' />
            <div></div>
            <p><span className='font-bold'>User Name:</span>{ user.name }</p>
            <p><span className='font-bold'>Email:</span> { user.email }</p>
            <p><span className='font-bold'>Registration Date:</span> {timeFormat(user.updated_at)}</p>
          </div>
       </div>
       <Footer/>
      </div>
    )
  );
};

export default Profile;