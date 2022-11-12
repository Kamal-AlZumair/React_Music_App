import React from "react";
import CenterMenu from "../components/CenterMenu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const socialStyle = "rounded-full border-2 border-white p-2 mr-[1rem]  md:mr-[5rem]"
	return (
		<div className="footer flex flex-col items-center justify-start px-[1rem] md:px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
			<CenterMenu />
			<div className="social flex w-full justify-center mt-14 ">
				<div className={socialStyle}>
					<FacebookIcon />
				</div>
				<div className={socialStyle}>
					<TwitterIcon />
				</div>
				<div className={socialStyle}>
					<YouTubeIcon />
				</div>
				<div className={socialStyle}>
					<LinkedInIcon />
				</div>
			</div>
				<span className="text-[12px] md:text-[1rem] text-gray-400 px-[2rem] md:px-[15rem] text-center mt-[4rem]">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</span>
		</div>
	);
}

export default Footer;