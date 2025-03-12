import logo from '../../assets/logo.png';
import { useState } from 'react';
import { navigations } from '../../constants';
import Menu from '../../assets/icons/Menu';
import Close from '../../assets/icons/Close';
import Button from './Button';
import Empty from '../../assets/icons/Empty';
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Navbar = () => {
  const [OpenNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (OpenNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <div className='top-0 left-0 w-full h-[10vh]'>
      <div className='w-full h-full flex items-center justify-around'>
        <a href='/'>
          <img src={logo} width={'180px'} height={'40px'} alt='EpicHiking' />
        </a>

        <nav className='flex flex-col'>
          <div
            className={`${
              OpenNavigation ? "flex flex-col items-center justify-around" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-[50%] bg-n-8 lg:static lg:flex lg:mx-auto gap-6 bg-white z-10`}
          >
            {navigations.map((links) => (
              <a 
                key={links.id} 
                href={links.url}
                className='text-black text-2xl font-bold lg:font-medium lg:text-[16px]'
              >
                {links.title}
              </a>
            ))}
          </div>

          <div className='lg:hidden'>
            <Button 
              Child={OpenNavigation ? Close : Menu} 
              onClick={toggleNavigation} 
              className={'lg:hidden'} 
            />
          </div>
        </nav>

        <div className='hidden lg:flex'>
          <Button
            className='w-[5em] h-[2em] border border-black rounded-sm'
            title='Log in'
            Child={Empty}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
