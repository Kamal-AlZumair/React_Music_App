import React from "react";
import DownloadAds from "../components/DownloadAds";
import path from "../../src/components/img/Path 318.png";
function Download() {
	return (
		<div className="downloads flex flex-col items-center justify-start px-[1rem] md:px-[5rem] bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
			<img src={path} alt="" className="w-[5rem]" />
			<div className="headline mt-7 flex flex-col items-center text-[1rem] md:text-[2rem]">
				<span className="">Download The Best Music</span>
				<span>
					<b>App Now!</b>
				</span>
				<span className=" text-[12px] md:text-[1rem] text-gray-400 px-1 md:px-[15rem] text-center mt-[1rem]">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form.
				</span>
			</div>
			<div className="mt-14">
				<DownloadAds />
			</div>
		</div>
	);
}

export default Download;