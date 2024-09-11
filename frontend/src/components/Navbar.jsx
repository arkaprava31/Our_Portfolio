import { useEffect, useState } from "react";

const Navbar = () => {
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

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 bg-[#13132EB2] backdrop-filter backdrop-blur-sm bg-opacity-30 h-[120px] border border-[#13132EB2] w-full text-white py-4 px-6 shadow-lg z-50">
			<div className="max-w-7xl mx-auto flex lg:flex-row md:flex-row flex-col  justify-between mt-4 items-center">
				{/* Logo */}
				<div className="text-2xl font-bold mb-2">
					<a href="">Logo</a>
				</div>

				{/* Links */}
				<nav className="lg:space-x-6 md:space-x-6  space-x-4 text-lg goldman-bold flex justify-center items-center">
					<a
						href=""
						className={`hover:text-gray-300 transition-colors ${
							activeSection === ""
								? "underline underline-offset-8 decoration-4 text-2xl  text-[#B2A2F4] decoration-[#B2A2F4]"
								: ""
						}`}
					>
						Home
					</a>
					<a
						href="#projects"
						className={`hover:text-gray-300 transition-colors ${
							activeSection === "projects"
								? "underline underline-offset-8 decoration-4  text-2xl text-[#B2A2F4] decoration-[#B2A2F4]"
								: ""
						}`}
					>
						Projects
					</a>
					<a
						href="#testimonials"
						className={`hover:text-gray-300 transition-colors ${
							activeSection === "testimonials"
								? "underline underline-offset-8 decoration-4  text-2xl text-[#B2A2F4] decoration-[#B2A2F4]"
								: ""
						}`}
					>
						Testimonials
					</a>
					<a
						href="#contactus"
						className={`hover:text-gray-300 transition-colors ${
							activeSection === "contactus"
								? "underline underline-offset-8 decoration-4  text-2xl text-[#B2A2F4] decoration-[#B2A2F4]"
								: ""
						}`}
					>
						Contacts 
					</a>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
