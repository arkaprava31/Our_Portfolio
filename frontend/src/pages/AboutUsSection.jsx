import { BackgroundBeamsWithCollision } from "../components/ui/background-beam-with-collision";
import AnimatedTooltip from "../components/ui/tooltip";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";

/* eslint-disable react/no-unescaped-entities */
const AboutUsSection = () => {
	const data = [
		{
			label: "HTML",
			value: "html",
			desc: `It really matters and then like it really doesn't matter.
		  What matters is the people who are sparked by it. And the people
		  who are like offended by it, it doesn't matter.`,
		},
		{
			label: "React",
			value: "react",
			desc: `Because it's about motivating the doers. Because I'm here
		  to follow my dreams and inspire other people to follow their dreams, too.`,
		},

	];
	const tools = [
		{
			id: 1,
			name: "React",
			designation: "Frontend Library",
			image: "/images/ex.png", // Replace with actual image paths
		},
		{
			id: 2,
			name: "Node.js",
			designation: "Backend Runtime",
			image: "/images/nextjs.png",
		},
		{
			id: 3,
			name: "MongoDB",
			designation: "NoSQL Database",
			image: "/path/to/mongodb-icon.png",
		},
		{
			id: 4,
			name: "Cloudinary",
			designation: "Cloud Storage",
			image: "/path/to/cloudinary-icon.png",
		},
	];

	return (
		<div className="w-full min-h-screen" id="projects">
			{/* Expertise Section */}
			<div className="flex flex-col justify-between items-center py-10 md:py-16">
				<div className="mx-auto w-11/12 max-w-5xl">
					<section className="py-12 bg-transparent">
						<div className="container mx-auto">
							<p className="text-3xl md:text-4xl font-bold text-center text-white">
								Our Expertise
							</p>

							{/* Expertise Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
								{/* Animated Tooltip for Tools */}
								<AnimatedTooltip items={tools} />
							</div>
						</div>
					</section>
					<Tabs id="custom-animation" value="html">
						<TabsHeader>
							{data.map(({ label, value }) => (
								<Tab key={value} value={value}>
									{label}
								</Tab>
							))}
						</TabsHeader>
						<TabsBody
							animate={{
								initial: { y: 250 },
								mount: { y: 0 },
								unmount: { y: 250 },
							}}
						>
							{data.map(({ value, desc }) => (
								<TabPanel key={value} value={value}>
									{desc}
								</TabPanel>
							))}
						</TabsBody>
					</Tabs>

					{/* Technologies Tabs */}
				</div>
			</div>
		</div>
	);
};

export default AboutUsSection;
