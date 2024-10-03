import { useEffect, useState } from "react";
import {
	IconBrandGithub,
	IconBrandX,
	IconExchange,
	IconHome,
	IconNewSection,
	IconTerminal2,
} from "@tabler/icons-react";
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
			href: "#",
		},

		{
			title: "Products",
			icon: (
				<IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "Components",
			icon: (
				<IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "Aceternity UI",
			icon: (
				<img
					src="https://assets.aceternity.com/logo-dark.png"
					width={20}
					height={20}
					alt="Aceternity Logo"
				/>
			),
			href: "#",
		},
		{
			title: "Changelog",
			icon: (
				<IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},

		{
			title: "Twitter",
			icon: (
				<IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "GitHub",
			icon: (
				<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
	];

	return (
		<div className="fixed top-0 left-0 md:bg-transparent bg-[#13132EB2] h-[120px] md:border-none   border-[#13132EB2] w-full text-white py-4 px-6 md:shadow-none shadow-lg z-50">
			<div className="max-w-7xl mx-auto flex   justify-between  items-center mt-8 md:mt-6">
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
