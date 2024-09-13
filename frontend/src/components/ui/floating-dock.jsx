/* eslint-disable react/prop-types */
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";

import { useRef, useState } from "react";
import { cn } from "../../libs/utils";
import { Link } from "react-router-dom";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
	return (
		<>
			<FloatingDockDesktop items={items} className={desktopClassName} />
			<FloatingDockMobile items={items} className={mobileClassName} />
		</>
	);
};
const FloatingDockMobile = ({ items, className }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className={cn("relative block md:hidden", className)}>
			<button
				onClick={() => setOpen(!open)}
				className="h-10 w-10 rounded-full bg-transparent flex items-center justify-center"
			>
				<IconLayoutNavbarCollapse className="h-5 w-5 text-white " />
			</button>
			<AnimatePresence>
				{open && (
					<motion.div
						layoutId="nav"
						className="absolute top-full mt-2 inset-x-0 flex flex-col gap-2"
					>
						{items.map((item, idx) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{
									opacity: 0,
									y: -10,
									transition: {
										delay: idx * 0.05,
									},
								}}
								transition={{ delay: (items.length - 1 - idx) * 0.05 }}
							>
								<Link
									href={item.href}
									key={item.title}
									className="h-10 w-10 rounded-full bg-transparent flex items-center justify-center"
								>
									<div className="h-4 w-4">{item.icon}</div>
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const FloatingDockDesktop = ({ items, className }) => {
	let mouseX = useMotionValue(Infinity);
	return (
		<motion.div
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={cn(
				"mx-auto hidden md:flex h-16 gap-4 items-end bg-[#322c5e] shadow-lg rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-50 px-4 pb-3",
				className
			)}
		>
			{items.map((item) => (
				<IconContainer mouseX={mouseX} key={item.title} {...item} />
			))}
		</motion.div>
	);
};

function IconContainer({ mouseX, title, icon, href }) {
	let ref = useRef(null);

	let distance = useTransform(mouseX, (val) => {
		let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

		return val - bounds.x - bounds.width / 2;
	});

	let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
	let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

	let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
	let heightTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[20, 40, 20]
	);

	let width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	let height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	let widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	let heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	const [hovered, setHovered] = useState(false);

	return (
		<Link href={href}>
			<motion.div
				ref={ref}
				style={{ width, height }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className="aspect-square rounded-full   flex items-center justify-center relative"
			>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, y: 10, x: "-50%" }}
							animate={{ opacity: 1, y: 0, x: "-50%" }}
							exit={{ opacity: 0, y: 2, x: "-50%" }}
							className="px-2 py-0.5 whitespace-pre rounded-md  border  dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-2 w-fit text-xs"
						>
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					style={{ width: widthIcon, height: heightIcon }}
					className="flex items-center justify-center"
				>
					{icon}
				</motion.div>
			</motion.div>
		</Link>
	);
}