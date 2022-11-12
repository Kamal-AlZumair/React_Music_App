import React from "react";
import MaskGroup from "./img/Mask Group 23.png";
import path from "./img/path.png";
import player from "./img/Group 9.png";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function MusicPlayer() {
	return (
		<div className="musicPlayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232a4e] rounded-xl mt-5">
			<div className="upperPart flex items-center justify-between">
				<div className="profile flex">
					<img
						src={MaskGroup}
						alt=""
						className=" w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full"
					/>
					<div className="details flex flex-col ml-4 ">
						<span className="text-[12px] md:text-[1rem]">Tristam Bone Dry</span>
						<span className=" text-[8px] md:text-sm text-gray-500">Unknown Artist</span>
					</div>
				</div>
				<div>
					<img src={path} alt="" className=" h-[1rem]" />
				</div>
			</div>
			{/* lower part */}
			<div className="lowerPart flex justify-between">
				<div className="track flex justify-evenly text-sm text-gray-500 flex-[2] items-center">
					<span className="mr-[20]">2:30</span>
					<img src={player} alt="" className=" w-[6rem] md:w-[16rem] " />
					<span className="ml-[20]">4:00</span>
				</div>
				<div className="control flex items-center ">
					<SkipPreviousIcon className=" text-gray-500"/>
					<div className=" flex items-center ">
						<div className="h-35 w-35 rounded-full bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-1">
							<div className="flex p-2 h-10 w-10   bg-[#232a4e] rounded-full items-center justify-center back">
								<PauseIcon />
							</div>
						</div>
					</div>
					<SkipNextIcon className=" text-gray-500"/>
				</div>
			</div>
		</div>
	);
}

export default MusicPlayer;
