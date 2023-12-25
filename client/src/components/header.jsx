"use client";
import React, { useState } from 'react'; 
// import { useRouter } from 'next/navigation';
import Image from "next/image";
import { usePathname } from 'next/navigation'

const UserName = "Vyasa";
const LoggedOut = false;
const ImageSource = "/testimg.png";


//loginpg-no circle
//home pg only login circle
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const PathName = usePathname();
  console.log(PathName);

  return (
    <div className="flex justify-between lg:h-38 w-full items-center p-4 bg-transparent-500 text-white font-inter">
      <h1 className="pl-2 lg:text-2xl text-2xl font-bold text-white ">PLACEMENT_WEBSITE</h1>
      <div className="relative pr-3">
        <Image
              src="/testimg.png"
              alt="."
              width={100}
              height={24}
              priority className="w-12 h-12 rounded-full object-cover dark:invert cursor-pointer" onClick={() => setIsOpen(!isOpen)}
        /> 
         {isOpen && ( 
          <>
          { PathName === '/login'?
            (null)
            :
            (( PathName === '/' && LoggedOut )?(
              <>
              <div className="absolute right-0 mt-2 w-48 h-30  bg-white rounded-md overflow-hidden shadow-xl z-10">
                <p className='text-3xl text-black  font-bold text-center py-3'>Hello</p>
                <a href="#" className=" text-center block px-4 py-3 text-xl text-gray-700 hover:bg-blue-500 hover:text-white">Log in</a>
              </div>
              </>
            )
            :
            (
              <div className="absolute right-0 mt-2 lg:w-48 w-40 lg:h-44  bg-white rounded-md overflow-hidden shadow-xl z-10">
                <h3 className='text-xl lg:text-2xl text-black  font-bold text-center py-4 '>Hi {UserName} </h3>
                <a href="#" className=" block px-4 py-3 lg:text-lg text-l text-gray-700 hover:bg-blue-500 hover:text-white">Profile</a>
                <a href="#" className=" block px-4 py-4 lg:text-lg text-l text-gray-700 hover:bg-blue-500 hover:text-white">Log out</a>
              </div>
            )
            )
          }



            {/* {LoggedIn ? (
          <div className="absolute right-0 mt-2 lg:w-48 w-40 lg:h-44  bg-white rounded-md overflow-hidden shadow-xl z-10">
          <h3 className='text-xl lg:text-2xl text-black  font-bold text-center py-4 '>Hi {UserName} </h3>
          <a href="#" className=" block px-4 py-3 lg:text-lg text-l text-gray-700 hover:bg-blue-500 hover:text-white">Profile</a>
          <a href="#" className=" block px-4 py-4 lg:text-lg text-l text-gray-700 hover:bg-blue-500 hover:text-white">Log out</a>
          </div>
        
      ) : (
        
          <div className="absolute right-0 mt-2 w-48 h-30  bg-white rounded-md overflow-hidden shadow-xl z-10">
          <p className='text-3xl text-black  font-bold text-center py-3'>Hello</p>
          <a href="#" className=" text-center block px-4 py-3 text-xl text-gray-700 hover:bg-blue-500 hover:text-white">Log in</a>
          </div>
        
      )} */}
          </>
        )} 
      </div>
    </div>
  );
};


// function DropdownItem(props){
//   return(
//     <li className = 'dropdownItem'>
//       <img src={props.img}></img>
//       <a> {props.text} </a>
//     </li>
//   );
// }

export default Header;