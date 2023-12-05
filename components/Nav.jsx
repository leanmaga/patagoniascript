
//import icons

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';


//link

import Link from 'next/link'

 

const Nav = () => {
  return <nav className='fixed bottom-0 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
     
      <div className='w-full bg-black/20 h-[100px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto p-5 flex justify-between text-2x1 text-white/50 '>
        <Link 
          href='#home'
          
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' 
        >
          <BiHomeAlt/>
        </Link>
        <Link 
          href='#about'
          
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' 
        >
          <BiUser/>
        </Link>
        <Link 
          href='#explore'
          
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' 
        >
          <BsClipboardData/>
        </Link>
        <Link 
          href='#work' 
          
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' 
        >
          <BsBriefcase/>
        </Link>
        <Link 
          href='#contact'
          
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' 
        >
          <BsChatSquareText/>
        </Link>
      </div>
    </div> 
  </nav>;
};

export default Nav;