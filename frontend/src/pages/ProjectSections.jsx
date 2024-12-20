/* eslint-disable react/no-unescaped-entities */

import { HoverEffect } from "../components/ui/card-hover-effect";

const ProjectSections = () => {
	const projects = [
		{
			title: "Stripe",
			description:
				"A technology company that builds economic infrastructure for the internet.",
			link: "https://stripe.com",
		},
		{
			title: "Netflix",
			description:
				"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
			link: "https://netflix.com",
		},
		{
			title: "Google",
			description:
				"A multinational technology company that specializes in Internet-related services and products.",
			link: "https://google.com",
		},
		{
			title: "Meta",
			description:
				"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
			link: "https://meta.com",
		},
		{
			title: "Amazon",
			description:
				"A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
			link: "https://amazon.com",
		},
		{
			title: "Microsoft",
			description:
				"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
			link: "https://microsoft.com",
		},
	];
	return (
		<section className="section-bg2 h-auto">

			{/* Projects Section */}
			<div className="max-w-5xl mx-auto px-8 pt-24">

				<p className="mt-10 text-center text-white font-semibold text-3xl goldman-regular">Our Work</p>
				<HoverEffect items={projects} className={"cursor-pointer"}/>
			</div>


		</section>
	);
};

export default ProjectSections;
