import { FocusCards } from "../components/ui/focus-cards";

/* eslint-disable react/no-unescaped-entities */
const AboutUsSection = () => {
	const cards = [
		{
			title: "Forest Adventure",
			src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "Valley of life",
			src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "Sala behta hi jayega",
			src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "Camping is for pros",
			src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "The road not taken",
			src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "The First Rule",
			src: "https://assets.aceternity.com/the-first-rule.png",
		},
	];

	return (
		<section
			className="min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center"
			id="projects"
		>
			{/* Header Section */}
			<div
				className="min-h-[200px] bg-[#EAEAEA] flex items-center justify-center"
				id="projects"
			>
				<p className="text-black text-2xl md:text-3xl font-semibold text-center">
					"Coding Your Vision to Reality"
				</p>
			</div>

			{/* Expertise Section */}
			<div className="flex flex-col justify-between items-center py-10 md:py-16">
				<div className="mx-auto w-11/12 max-w-5xl">
					<p className="text-xl md:text-2xl font-bold text-center">
						Our Expertise
					</p>
					<p className="mt-4 text-lg md:text-xl text-center">
						Out skills description here
					</p>
				</div>
			</div>

			{/* Projects Section */}
			<div className="py-10 px-4 md:py-16">
				<FocusCards cards={cards} />
			</div>
		</section>
	);
};

export default AboutUsSection;
