import React from "react";
import Feature from "../components/Feature";
import Path from "../../src/components/img/Path 318.png";
import Group2 from '../../src/components/img/Group 2.png';
import MusicIcon from '../../src/components/img/music icon.png';
import Group4 from '../../src/components/img/Group 4.png';
import styles from '../style';

function Experience() {
	return (
		<div className={`experience ${styles.paddingX}  flex flex-col items-center justify-start px-[1rem]  md:px-[5rem]  bg-[#020917]  pt-[14rem] mt-[-10rem] relative z-[2] rounded-b-[5rem] h-[100%]`}>
			<img src={Path} alt="" className=" w-[5rem]" />
			<div className="headline mt-7 flex flex-col items-center text-center  text-[1.5rem] md:text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className="features flex flex-col md:flex-row items-center justify-center mt-[2rem] ">
        <Feature icon={Group2} title = 'For Live Music'/>
        <Feature icon={MusicIcon} title = 'For Daily Music'/>
        <Feature icon={Group4} title = 'For Artist'/>
      </div>
		</div>
	);
}

export default Experience;
