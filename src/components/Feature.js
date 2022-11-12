import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Feature({ icon, title }) {
	const [elementIsVisible, setElementIsVisible] = useState(false);
  const variant={
    true:{
      transform:"scale(1)",
    },
    false:{
      transform:"scale(0.5)",
    }
  };
	return (
		<VisibilitySensor onChange={(isVisible)=>setElementIsVisible(isVisible)} >
			<div className="feature flex items-center justify-center flex-col relative text-center my-3 mx-2">
				<motion.div variants={variant} animate={`${elementIsVisible}`} transition={{duration:1, type:'ease-out'}} className="icon bg-[#081730] rounded-2xl p-4">
					<img   src={icon} alt="" className=" w-[3rem]" />
				</motion.div>
				<span className=" mt-5">{title}</span>
				<span className=" text-[#707070] mt-4 text-start text-sm">
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old.{" "}
				</span>
				<span className="text-[#e600ff] underline mt-[3rem] hover:cursor-pointer">
					Learn More
				</span>
			</div>
		</VisibilitySensor>
	);
}

export default Feature;
