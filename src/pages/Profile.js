import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import billing from '../icons/billing_payment.svg'
import giftCard from '../icons/giftCard.svg'
import addCard from '../icons/add_card_FILL0_wght400_GRAD0_opsz48.svg'
import discount from '../icons/discount.svg'
import orderHistory from '../icons/order_history.svg'


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user)

const timeFormat = (update_time) => {
  const date = new Date(update_time);
  const time = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric' });
  return time
}

  return (
    isAuthenticated && (
      <div>
       <NavBar />
       <p className='overline decoration-[#ff583e] decoration-2 text-3xl mb-4 text-center'>Personal Information</p>
       <div className='bg-gray-300 w-[60%] flex justify-space-between items-center gap-20 ml-[20%] shadow-md shadow-gray-500 rounded m-10'>
          <div className='flex flex-col gap-4 bg-[#ff583e] p-10'>
            <img id='img' src={ user.picture } alt={ user.name } className='rounded-full p-4' />
            <div className='flex items-center gap-1'> <img src={billing} className='w-3 h-3' alt='billing'/> Billing and Payments </div>
            <div className='flex items-center gap-1'><img src={orderHistory} className='w-3 h-3' alt='order history'/> Order History </div>
            <div className='flex items-center gap-1'> <img src={giftCard} className='w-3 h-3' alt='gift card'/> Gift cards </div>
            <div className='flex items-center gap-1'> <img src={discount} className='w-3 h-3' alt='discount'/> Discounts </div>
            <div className='flex items-center gap-1'> <img src={addCard} className='w-3 h-3' alt='add card'/> card </div>
          </div>
          <div>
            <p><span className='font-bold'>User Name:</span> { user.name }</p>
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