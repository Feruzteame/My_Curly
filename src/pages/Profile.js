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
       <div className='bg-gray-100 w-[80%] lg:w-[50%] flex flex-col justify-center items-center shadow-md shadow-gray-500 rounded p-6 m-10'>
          <p className='lg:self-start font-bold'>Account setting</p>
          <div className='flex flex-col gap-4'>
            <img id='img' src={ user.picture } alt={ user.name } className='self-center rounded-full p-4 h-[100px] w-[100px]' />
            <div></div>
            <p><span className='font-bold italic text-neutral-500'>User Name:</span> { user.name }</p>
            <p><span className='font-bold italic text-neutral-500'>Email:</span> { user.email }</p>
            <p><span className='font-bold italic text-neutral-500'>Registration Date:</span> {timeFormat(user.updated_at)}</p>
          </div>
       </div>
       <div className="p-5 w-[80%] lg:w-[50%] bg-gray-100 shadow-md shadow-gray-500 rounded">
        <div className="justify-center">
          <div md="10" lg="8" xl="5">
            <div className="rounded-lg">
              <div className="p-4">
                <div className="text-center mb-4">
                  <h3 className="font-bold lg:text-left">Settings Payment</h3>
                </div>
                <p className="italic mb-4 pb-2 text-neutral-500">Saved cards:</p>
                <div className="flex items-center mb-4 pb-1 gap-2">
                  <img className="w-12 h-12" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" />
                  <div className="">
                    <div className="flex flex-col-reverse">
                      <input type="text" value="**** **** **** 3193" className='m-3 p-2 rounded'/>
                      <label>Card Number</label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-4 pb-1 gap-2">
                  <img className="w-12 h-12" src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                  <div className="">
                    <div className="flex flex-col-reverse">
                      <input type="text" value="**** **** **** 4296" className='m-3 p-2 rounded'/>
                      <label>Card Number</label>
                    </div>
                  </div>
                </div>
                <p className="italic mb-4 pb-2 text-neutral-500">Add new card:</p>
                <div className='flex flex-col-reverse'>
                  <input type="text" value={ user.name } className='m-3 p-2 lg:w-[350px] rounded'/>
                  <label>Cardholder's Name</label>
                </div>
                <div className="flex flex-wrap my-4 gap-4">
                  <div className='flex flex-col-reverse'>
                    <input type="text" value="1234 5678 1234 5678" className='h-8 lg:w-[350px] m-3 p-4 rounded' />
                    <label>Card Number</label>
                  </div>
                  <div className='flex flex-col-reverse'>
                    <input id="form5" type="password" placeholder='MM/YYYY' className='h-8 w-[200px] m-3 p-4 rounded' />
                    <label>Expire Date</label>
                  </div>
                  <div className='flex flex-col-reverse'>
                    <input id="form6" type="password" placeholder="CVV" className='h-8 w-[200px] m-3 p-4 rounded' />
                    <label>CVV</label>
                  </div>
                </div>
                <button className='text-center w-[80%] bg-[#ff583e] m-5 p-3 rounded'>
                  Add card
                </button>
              </div>
            </div>
          </div>
        </div>
       </div>
       <Footer/>
      </div>
    )
  );
};

export default Profile;