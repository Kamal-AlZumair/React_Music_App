import React from 'react'
import { useState } from "react";
import { navLinks } from "../constants";
import logo from '../../src/components/img/MuzicLogo.png'
import close from '../../src/components/img/close.svg'
import menu from '../../src/components/img/menu.svg'


const Navbar = () => {
  const buttonStyle =
		"border-[2px] rounded-[10px] border-[#232a4e] px-[25px] py-[7px]";
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-[#081730] w-full flex py-6 justify-between z-[10] items-center navbar">
			<img src={logo} alt="logo" className={`w-[42px] h-[42px]`} />
			<ul className=" list-none md:flex hidden justify-end items-end flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal text-[16px] mr-5 ${index === navLinks.length - 1 ? 'mr-[200px]':'mr-5'} text-white`}>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>
      <div className="buttons flex-row md:block hidden">
					<button className={`mr-[35px] hover:bg-[#232a4e] ` + buttonStyle}>
						Login
					</button>
					<button className={`bg-[#232a4e] `+buttonStyle}>
						Sign Up
					</button>
				</div>
			<div className=" md:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt=""
					className=" w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient sidebar absolute top-[60px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className=" list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-normal text-[16px]  ${
									index === navLinks.length - 1 ? "mb-0" : "mb-4"
								} text-white`}>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
            <li className='mt-4'>Login</li>
            <li className='mt-4'>Sign up</li>
					</ul>
				</div>
			</div>
		</nav>
  )
}

export default Navbar
