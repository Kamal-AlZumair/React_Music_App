import React, { useState } from "react";
import DownloadAds from '../components/DownloadAds';
import styles from '../style';
import Backgraphic from "../../src/components/img/backgraphics.png";
import P1 from "../../src/components/img/p 1.png";
import P2 from "../../src/components/img/p 2.png";
import P3 from "../../src/components/img/p 3.png";
import P4 from "../../src/components/img/p 4.png";
import {motion} from 'framer-motion'
import VisibilitySensor from "react-visibility-sensor";


const Hero = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
	const bg = {
		true:{
			left : "7rem",
		},
		false: {
			left : '19rem',
		}
	}
	const musicPlayer = {
		true:{
			left : "295px",
		},
		false: {
			left : '235px',
		}
	}
	const rect = {
		true:{
			left : "11rem",
		},
		false: {
			left : '13rem',
		}
	}
	const heart = {
		true:{
			left : "9rem",
		},
		false: {
			left : '12.5rem',
		}
	}
  return (
   
      <VisibilitySensor onChange={(isVisible)=>setElementIsVisible(isVisible)} minTopValue={300}>
      <section id="home" className={`bg-[#081730] ${styles.paddingX} flex sm:flex-row flex-col sm:items-center sm:justify-between  sm:px-16 rounded-b-[5rem] w-full h-[35rem] relative z-[3] sm:py-16 py-3`}>
      <div className={`flex flex-col items-start justify-start h-[100%] text-[2rem]  sm:text-[2rem]`}>
					<span className=' '>Experience The</span>
					<span>
						<b>Best Quality Music</b>
					</span>
					<span className="text-[12px] sm:text-[14px] text-[#525d6e] max-w-[450px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						<br />
						Contrary to popular belief, Lorem Ipsum is not simply random text.
					</span>
					<div>
						<span className=" text-[13px]">
							Download now on IOS and Android
						</span>
						<DownloadAds />
					</div>
				</div>
        <div className={`relative mt-[-8rem] ss:mt-[-10] sm:mt-[6rem] md:mt-0  scale-[0.4] sm:scale-[0.6]  md:scale-[0.8] lg:scale-[1] w-[100%] lg:w-[50%]`}>
					
					<motion.img variants={bg} animate={`${elementIsVisible}`} transition={{duration:1, type:'ease-out'}} src={Backgraphic} alt="" className=" absolute top-[-8rem] left-[19rem]"/>
					<img src={P1} alt="" className=" absolute top-[-15rem] h-[34rem] left-[13rem]"/>
					<motion.img variants={musicPlayer} animate={`${elementIsVisible}`} transition={{duration:1, type:'ease-out'}} src={P2} alt="" className=" absolute left-[235px] top-[94px] w-[175px]"/>
					<motion.img variants={rect} animate={`${elementIsVisible}`} transition={{duration:1, type:'ease-out'}} src={P3} alt="" className=" absolute w-[5rem] left-[13rem] top-[12rem]"/>
					<motion.img variants={heart} animate={`${elementIsVisible}`} transition={{duration:1, type:'ease-out'}} src={P4} alt="" className=" absolute w-[5rem] left-[12.5rem] top-[12rem]"/>
					
        </div>
      </section>
      </VisibilitySensor>
  )
}

export default Hero
