import React from "react";
import AppStore from "./img/App Store.png";
import GooglePlay from "./img/Google Play.png";
function DownloadAds() {
	const imgStyle =
		"border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]";
	return (
		<div className="download">
			<div className="download_images flex ">
				<img src={AppStore} alt="" className={`mr-[1rem] w-[150px] sm:w-[100%] `+imgStyle} />
				<img src={GooglePlay} alt="" className={`w-[150px] sm:w-[100%] ${imgStyle}`} />
			</div>
		</div>
	);
}

export default DownloadAds;
