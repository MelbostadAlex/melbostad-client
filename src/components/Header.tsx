import logo from '../assets/images/logo.png';
import cart from '../assets/icons/cart.svg';
import seFlag from '../assets/icons/se-flag.png';
import menuIcon from '../assets/icons/menu.svg';
import closeIcon from '../assets/icons/close.svg';
import instagramIcon from '../assets/icons/instagram.png';
import linkedInIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  route: string;
}

function Header(props: HeaderProps) {
  const { route } = props; 
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleClick = () => setShowMobileMenu(!showMobileMenu);

  return (
    <header className='flex flex-row justify-between bg-white position-sticky p-4 border-b-black border-[0.5px] z-10'>
      <Link to={'/'}>
        <img
          src={logo}
          alt='Logo'
          className='lg:w-[120px] md:w-[120px] z-10 w-[80px] max-w-none h-[40px] md:h-[50px] lg:h-[50px]'></img>
      </Link>

      {/** Link Nav */}

      <div className='hidden md:flex lg:flex'>
        <div className='flex flex-row roboto-regular text-lg ml-[200px]'>
          <Link to={'/'}>
            <p className={route === 'home' ? 'py-4 px-6 border-b-2 border-black' : 'py-4 px-6'}>Home</p>
          </Link>

          <Link to={'/shop'}>
          <p className={route === 'shop' ? 'py-4 px-6 border-b-2 border-black' : 'py-4 px-6'}>Shop</p>
          </Link>

          <Link to={'/contact'}>
          <p className={route === 'contact' ? 'py-4 px-6 border-b-2 border-black' : 'py-4 px-6'}>Contact</p>
          </Link>

          <Link to={'/faq'}>
          <p className={route === 'faq' ? 'py-4 px-6 border-b-2 border-black' : 'py-4 px-6'}>FAQ</p>
          </Link>
        </div>
      </div>

      {/** Hamburger Menu Icon */}

      <div
        className='flex flex-row justify-end lg:hidden md:hidden z-10'
        onClick={handleClick}>
        {!showMobileMenu ? (
          <>
            <img
              src={menuIcon}
              alt='Logo'
              className='lg:w-[140px] md:w-[140px] w-[100px] z-10 max-w-none h-[50px] md:h-[60px] lg:h-[60px]'></img>
          </>
        ) : (
          <>
            <img
              src={closeIcon}
              alt='Logo'
              className='lg:w-[140px] md:w-[140px] w-[100px] max-w-none h-[50px] md:h-[60px] lg:h-[60px]'></img>
          </>
        )}
      </div>

      {/** Hamburger Menu */}

      <ul
        className={
          !showMobileMenu
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center roboto-black'
        }>
          <Link to={'/'}>
          <li className={route === 'home' ? 'py-6 text-4xl border-b-2 border-black' : 'py-6 text-4xl'}> Home </li>
          </Link>

          <Link to={'/shop'}>
          <li className={route === 'shop' ? 'py-6 text-4xl border-b-2 border-black' : 'py-6 text-4xl'}> Shop </li>
          </Link>

          <Link to={'/contact'}>
            <li className={route === 'contact' ? 'py-6 text-4xl border-b-2 border-black' : 'py-6 text-4xl'}> Contact </li>
          </Link>

          <Link to={'/faq'}>
          <li className={route === 'faq' ? 'py-6 text-4xl border-b-2 border-black' : 'py-6 text-4xl'}> FAQ </li>
          </Link>

          

        <div className='flex flex-row justify-evenly p-10'>
          <div className='p-8'>
            <a href='https://www.instagram.com/alexmelbostad/'>
              <img
                src={instagramIcon}
                alt='Instagram'
                className='w-[60px] h-[60px]'></img>
            </a>
          </div>

          <div className='p-8'>
            <a href='https://www.linkedin.com/in/alexander-melbostad-0096901a0/'>
              <img
                src={linkedInIcon}
                alt='LinkedIn'
                className='w-[90px] h-[60px]'></img>
            </a>
          </div>

          <div className='p-6'>
          <a href='https://github.com/MelbostadAlex'>
            <img
              src={githubIcon}
              alt='Github'
              className='w-[70px] h-[70px]'></img>
              </a>
          </div>
        </div>

        <div className='flex flex-row align-center justify-center pt-[6vh] pb-[2vh] roboto-thin-italic'>
          <h2> @ 2024 - Mr Melbostad Ltd, All rights reserved</h2>
        </div>
      </ul>

      {/** Sign in / Sign up & flag / cart */}

      <div className='flex-row justify-around items-center hidden md:flex lg:flex'>
        <div>
          <Link to={'/signin'}>
            <button className='py-4 px-8 mx-2 border-2 border-black text-black rounded-lg roboto-black'>
              Sign In
            </button>
          </Link>

          <Link to={'/signup'}>
            <button className='py-4 px-8 mx-2 border-2 bg-black text-white rounded-lg roboto-black'>
              Sign Up
            </button>
          </Link>
        </div>

        <div className='flex flex-row mx-6'>
          <Link to={'#'}>
            <img src={cart} className='mx-2 w-[28px] h-[28px]' alt='Cart' />
          </Link>

          <img src={seFlag} className='mx-2 w-[28px] h-[28px]' alt='Cart' />
        </div>
      </div>
    </header>
  );
}

export default Header;
