import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, onConfirm }) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded p-4">
      <p className="text-center">{message}</p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onConfirm}
        >
          OK
        </button>
      </div>
    </div>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Alert;


