import React, { useEffect } from 'react';

const ModuleComponent = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#48a148] rounded-lg shadow-md p-4 text-white'>
      <div className='rounded'>
        <p className='text-center'>{message}</p>
      </div>
    </div>
  );
};

export default ModuleComponent;


