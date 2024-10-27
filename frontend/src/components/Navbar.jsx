import { useEffect, useState } from "react";
import {
	IconBrandGithub,
	IconBrandX,
	IconExchange,
	IconHome,
	IconNewSection,
	IconTerminal2,
	IconAddressBook
} from "@tabler/icons-react";
import { TbBulb } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { FloatingDock } from "./ui/floating-dock";

const Navbar = () => {
	// eslint-disable-next-line no-unused-vars
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const options = {
			root: null,
			threshold: 0.6,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);
		("");

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);
	const links = [
		{
			title: "Home",
			icon: (
				<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "/",
		},

		{
			title: "Our Expertise",
			icon: (
				<TbBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "/expertise",
		},
		{
			title: "Projects",
			icon: (
				<GrProjects className="h-full w-full text-neutral-500 dark:text-neutral-300 py-0.5" />
			),
			href: "/projects",
		},
		
		{
			title: "Contacts",
			icon: (
				<IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "/contacts",
		},


		
	];

	return (
		<div className="fixed top-0 left-0 md:bg-transparent bg-[#13132EB2] h-[80px] md:border-none   border-[#13132EB2] w-full text-white py-4 px-6 md:shadow-none shadow-lg z-50">
			<div className="max-w-7xl mx-auto flex   justify-between  items-center mt-2 md:mt-6">
				{/* Logo */}
				{/* <div className="text-2xl font-bold mb-2">
					<a href="">Logo</a>
				</div> */}
				<div className="w-[2.25rem] flex items-center justify-center">
					<img src="images/logo.png" alt="logo" className="w-full" />
				</div>

				{/* Links */}
				<FloatingDock
					mobileClassName="" // only for demo, remove for production
					items={links}
				/>
			</div>
		</div>
	);
};

export default Navbar;
