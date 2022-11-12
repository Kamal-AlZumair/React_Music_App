import React from "react";

function CenterMenu() {
  const liyStyle = "mr-[16px] md:mr-[3rem] hover:cursor-pointer"
	return (
		<div className="menu flex ">
			<ul className={"flex w-full justify-between"}>
				<li className={liyStyle}>Home</li>
				<li className={liyStyle}>About</li>
				<li className={liyStyle}>Performer</li>
				<li className={liyStyle}>Event Schedule</li>
			</ul>
		</div>
	);
}

export default CenterMenu;
