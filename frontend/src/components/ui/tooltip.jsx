/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const AnimatedTooltip = ({ items }) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0); // going to set this value on mouse move
	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

	const handleMouseMove = (event) => {
		const halfWidth = event.target.offsetWidth / 2;
		x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};

	return (
		<>
			{items.map((item) => (
				<div
					className="relative group flex flex-col items-center"
					key={item.name}
					onMouseEnter={() => setHoveredIndex(item.id)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === item.id && (
							<motion.div
								initial={{ opacity: 0, y: 20, scale: 0.6 }}
								animate={{
									opacity: 1,
									y: 0,
									scale: 1,
									transition: {
										type: "spring",
										stiffness: 260,
										damping: 10,
									},
								}}
								exit={{ opacity: 0, y: 20, scale: 0.6 }}
								style={{
									translateX: translateX,
									rotate: rotate,
									whiteSpace: "nowrap",
								}}
								className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-80 text-white shadow-lg px-4 py-2 z-50"
							>
								<span className="text-lg font-bold">{item.name}</span>
								<span className="text-sm">{item.designation}</span>
							</motion.div>
						)}
					</AnimatePresence>

					<img
						onMouseMove={handleMouseMove}
						height={100}
						width={100}
						src={item.image}
						alt={item.name}
						className="object-cover rounded-full md:h-20 md:w-20 h-14 w-14 border-2 border-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300"
					/>
				</div>
			))}
		</>
	);
};

export default AnimatedTooltip;
