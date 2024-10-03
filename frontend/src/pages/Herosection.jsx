import { useEffect, useState } from "react";
import { FlipWords } from "../components/ui/flip-words";

const Herosection = () => {
	const words = ["Mern Stack", "NextJs", "React Native", "Expo"];
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

	const handleScrollToProjects = () => {
		const projectSection = document.getElementById("projects");
		projectSection.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="section-bg flex flex-col md:flex-row gap-4 items-center justify-center px-4 md:px-16 py-10 md:text-left text-center">
			<div className="text-2xl md:text-4xl goldman-regular md:w-[543px] w-full flex flex-col items-start gap-2">
				<div className="md:px-0 px-6 flex flex-col items-center gap-4">
					<h1 className="text-main w-full text-left leading-[3rem]">
						A Team of Experts, Crafting & Optimizing Web Solutions.
					</h1>
					<h2 className="text-2xl md:text-3xl w-full text-left">
						We work on
						<FlipWords words={words} className="text-[#8D75EE]" />
					</h2>
				</div>

				<p className="text-sm text-gray-400 mt-6 mb-8 w-full text-left tracking-wider leading-5 md:p-0 p-4">
					A team of web developers collaborates to design, build, and maintain
					websites and web applications, ensuring functionality, user
					experience, and performance across digital platforms.
				</p>
				<button
					onClick={handleScrollToProjects}
					className="bg-[#8D75EE] text-white rounded-lg text-lg py-2.5 px-6 hover:bg-[#6D5DC9] md:ml-0 ml-4 transition-colors tracking-widest"
				>
					Let's Talk
				</button>
			</div>
			<div className="md:w-1/2 mt-8 md:mt-0 w-full flex items-center justify-center">
				<img
					src="/images/HeroImage.png"
					alt="Hero Section Image"
					className="w-full h-auto rounded-lg"
				/>
			</div>
		</div>
	);
};

export default Herosection;
