//import { Link } from 'react-router-dom';
import blackLogo from '../images/blackLogo.png'
import facebook from '../icons/facebook.svg'
import instagram from '../icons/instagram.svg'
import youtube from '../icons/youtube.svg'

function Footer() {
  return (
    <div className="bg-black py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src={blackLogo} alt='blackLogo' className='w-20 h-20' />
          <div className='flex gap-1'>
            <a href='google.com'>
              <img
                src={facebook}
                alt='facebook'
                className="w-8 h-8 mx-2 transition duration-300 transform hover:scale-150"
              />
            </a>
            <a href='google.com'>
              <img
                src={instagram}
                alt='instagram'
                className="w-8 h-8 mx-2 transition duration-300 transform hover:scale-150"
              />
            </a>
            <a href='google.com'>
              <img
                src={youtube}
                alt='youtube'
                className="w-8 h-8 mx-2 transition duration-300 transform hover:scale-150"
              />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2023 MyCurly. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;