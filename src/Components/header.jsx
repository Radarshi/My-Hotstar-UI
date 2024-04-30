import React, { useState } from "react";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import {
    HiHome,
    HiMagnifyingGlass,
    HiPlayCircle,
    HiStar,
    HiTv
} from "react-icons/hi2";
import logo from './../assets/Images/hotstar-logo.png';
import user from './../assets/Images/user.jpg';
import HeaderItem from './HeaderItem';

function Header(){
    const [toggle,setToggle] = useState(false);
    const menu = [
        {
            name : 'HOME',
            icon : HiHome
        },
        {
            name : 'SEARCH',
            icon : HiMagnifyingGlass
        },
        {
            name : 'WATCH LIST',
            icon : HiPlus
        },
        {
            name : 'ORIGINALS',
            icon : HiStar
        },
        {
            name : 'MOVIES',
            icon : HiPlayCircle
        },
        {
            name : 'SERIES',
            icon : HiTv
        }
    ]
    return (
        <div className="flex items-center justify-between p-5">
            <div className="flex  gap-8 items-center">
            <img src={logo} alt="" className="w-[80px]
             md:w-[115px] object-cover"/>
             <div className=" hidden md:flex gap-8">
             {menu.map((item)=>(
                <HeaderItem name={item.name} Icon={item.icon}/>
             ))}
             </div>
             <div className="flex  md:hidden gap-5">
             {menu.map((item,index)=> index<3&&(
                <HeaderItem name={''} Icon={item.icon}/>
             ))}
             <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical}/>
               {toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-600 p-3 px-5 py-4 ">
                {menu.map((item,index)=> index>2&&(
                <HeaderItem name={item.name} Icon={item.icon}/>
             ))}
                </div>:null}
                </div>
             </div>
             </div>
             <img src={user} className="w-[40px] h-[40px] rounded-full flex items-end"/>
        </div>
    )
}

export default Header;