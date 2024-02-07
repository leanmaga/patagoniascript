'use client'

//import icons

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

//link

import { Link } from 'react-scroll';

const Nav = () => {

  return <nav className='fixed bottom-0 w-full overflow-hidden z-50'>
    
    <div className='container mx-auto'>
     
      <div className='w-full bg-black/20 h-[75px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto p-5 flex justify-between text-2x1 text-white/50 '>
        
        <Link 
          to='home'
          activeClass='active'
          smooth={true}
          spy={true} 
          offset={0}
          className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center' 
        >
          <BiHomeAlt/>
        </Link>
        <Link 
          to='about'
          activeClass='active'
          smooth={true}
          spy={true} 
          offset={0}
          className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center' 
        >
          <BiUser/>
        </Link>
        <Link 
          to='explore' 
          activeClass='active'
          smooth={true}
          spy={true} 
          offset={0}       
          className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center ' 
        >
          <BsClipboardData/>
        </Link>
        <Link 
          to='work'
          activeClass='active'
          smooth={true}
          spy={true} 
          offset={0}         
          className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center ' 
        >
          <BsBriefcase/>
        </Link>
        <Link 
          to='contact'  
          activeClass='active'
          smooth={true}
          spy={true} 
          offset={0}      
          className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center ' 
        >
          <BsChatSquareText/>
        </Link>

      </div>

    </div> 

  </nav>;

};

export default Nav;