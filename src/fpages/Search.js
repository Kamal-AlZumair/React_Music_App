import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import Backgraphics from "../../src/components/img/backgraphics.png";
import d1 from "../../src/components/img/d1.png";
import d2 from "../../src/components/img/d2.png";
import d3 from "../../src/components/img/d3.png";
import d4 from "../../src/components/img/d4.png";
import search from "../../src/components/img/search.png";
import path from "../../src/components/img/Path 318.png";
import MusicPlayer from "../components/MusicPlayer";

export default function Search() {
	const [elementIsVisible, setElementIsVisible] = useState(false);
	const bg = {
		true: {
			left: "-44rem",
		},
		false: {
			left: "-50rem",
		},
	};
	const redimg = {
		true: {
			left: "18rem",
		},
		false: {
			left: "16rem",
		},
	};
	const musicimg = {
		true: {
			left: "2rem",
		},
		false: {
			left: "6rem",
		},
	};
	return (
		<div className="search relative h-[65rem] px-[2rem] md:px-[5rem] bg-[#081730] pt-[10rem] md:pt-[18rem] pb-[10px] md:pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
			<div className="left hidden md:block flex-1">
				<motion.img
					variants={bg}
					animate={`${elementIsVisible}`}
					transition={{ duration: 1, type: "ease-out" }}
					src={Backgraphics}
					alt=""
					className="absolute top-[22rem] left-[-47rem] z-[-2]"
				/>
				<img src={d1} alt="" className=" w-[16rem] top-[26rem] absolute" />
				<motion.img
					src={d2}
					alt=""
					className=" w-[9rem] absolute top-[32.7rem] left-[7rem]"
				/>
				<motion.img
					variants={redimg}
					animate={`${elementIsVisible}`}
					transition={{ duration: 1.2, type: "ease-out" }}
					src={d3}
					alt=""
					className=" w-[9rem] absolute top-[33rem] left-[17rem]"
				/>
				<motion.img
					variants={musicimg}
					animate={`${elementIsVisible}`}
					transition={{ duration: 1, type: "ease-out" }}
					src={d4}
					alt=""
					className=" w-[17rem] absolute top-[50rem] left-[2rem]"
				/>
			</div>
			<div className="right flex items-start flex-col justify-center md:justify-start flex-1 h-[100%]  pt-[0rem]  md:pt-[9rem]">
				{/* search Input field */}
				<div className="searchbar flex justify-start w-[100%]">
					<input
						type="text"
						placeholder="Enter The Key World or URL"
						className=" flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
					/>
					{/* search Icon */}
					<div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-4 h-[3rem]">
						<img src={search} alt="" className=" w-[1.5rem]" />
					</div>
				</div>
				{/* tild Icon */}
				<div className="tild flex justify-start mt-7 items-center w-[100%]">
					<img src={path} alt="" className=" w-[5rem]" />
				</div>
				{/* paragraph */}
				<div className="detail flex flex-col mt-5 text-4xl">
					<span>Search Music By</span>
					<span>
						<b className="text-xl md:text-4xl">Name or Direct URL</b>
					</span>
					<span className=" text-sm mt-3 text-[#4d586a]">
						There are many variations of passages of <br />
						Lorem Ipsum available,but the majority
						<br />
						have suffered alteration in some form.
					</span>
				</div>
				{/* music Player */}

				<VisibilitySensor
					onChange={(isVisible) => setElementIsVisible(isVisible)}>
					<MusicPlayer />
				</VisibilitySensor>
			</div>
		</div>
	);
}
