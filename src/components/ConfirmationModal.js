import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white rounded-lg p-4'>
        <p className='mb-4'>{message}</p>
        <div className='flex justify-center'>
          <button className='bg-blue-500 text-white px-4 py-2 mr-2 rounded'onClick={onConfirm}>Confirm</button>
          <button className='bg-red-500 text-white px-4 py-2 rounded'onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

