import React, {useState, useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Delete from '../icons/cancel.svg'
import ModuleComponent from '../components/module';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cards, setCards] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const timeFormat = (update_time) => {
    const date = new Date(update_time);
    const time = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric' });
    return time
  }

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(storedCards);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (cardholderName.trim() === '' || cardNumber.trim() === '' || expirationDate.trim() === '' || cvv.trim() === '') {
      setShowAlert(true);
      return;
    }

    const newCard = {
      cardholderName,
      cardNumber,
      expirationDate,
      cvv,
    };

    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));

    setCardholderName('');
    setCardNumber('');
    setExpirationDate('');
    setCVV('');
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

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
                {cards.length > 0 ? (
                  <ul>
                    {cards.map((card, index) => (
                      <li key={index}>
                        <div className='flex items-center gap-4'>
                          {
                            card.cardNumber.slice(0, 1) % 2 === 0 ? 
                            <img className="w-12 h-12" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" /> : 
                            <img className="w-12 h-12" src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />} 
                            **** **** **** {card.cardNumber.slice(-4)
                          }
                          <img src={Delete} alt="delete"
                          onClick={handleDeleteCard}
                          className="w-5 h-5 transition duration-300 transform hover:scale-125"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='font-bold text-lg p-10 text-center'>No cards saved</p>
                )}
                <form onSubmit={handleFormSubmit}>
                  <p className="italic mb-4 pb-2 text-neutral-500">Add new card:</p>
                  <div className='flex flex-col-reverse'>
                    <input
                    required
                    type="text"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    className='m-3 p-2 lg:w-[350px] w-[90%] rounded'/>
                    <label>Cardholder's Name</label>
                  </div>
                  <div className='flex flex-col-reverse'>
                    <input
                    required 
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className='m-3 p-2 lg:w-[350px] w-[90%] rounded' />
                    <label>Card Number</label>
                  </div>
                  <div className='flex flex-col-reverse'>
                    <input id="form5"
                    required
                    type="text"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    placeholder='MM/YYYY'
                    className='m-3 p-2 lg:w-[350px] w-[90%] rounded' />
                    <label>Expire Date</label>
                  </div>
                  <div className='flex flex-col-reverse'>
                    <input id="form6"
                    required
                    type="password"
                    value={cvv}
                    onChange={(e) => setCVV(e.target.value)}
                    placeholder="CVV" 
                    className='m-3 p-2 lg:w-[350px] w-[90%] rounded' />
                    <label>CVV</label>
                  </div>
                  <button onClick={handleFormSubmit} className='text-center lg:w-[350px] w-[90%] bg-[#ff583e] m-3 p-3 rounded border border-[#ff583e] text-white hover:bg-white hover:text-black hover:border-[#ff583e]'>
                    Add card
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
       </div>
       <Footer/>
       {showAlert && (
        <ModuleComponent
          type="Error"
          message="Please fill all the necessary requirement"
          onClose={() => setShowAlert(false)}
        />
      )}
      </div>
    )
  );
};

export default Profile;