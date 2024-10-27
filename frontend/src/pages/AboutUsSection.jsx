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

const WebDevelopment = () => (
	<div className="p-4 sm:p-6 rounded-lg shadow-md text-white border border-indigo-700">
		<h3 className="text-xl sm:text-2xl font-semibold mb-4">Web Development</h3>
		<ul className="list-disc list-inside space-y-2 sm:space-y-3 pl-4">
			<li>
				<strong>Responsive Design:</strong> Creating adaptable layouts and components using CSS frameworks and custom styling.
			</li>
			<li>
				<strong>Performance Optimization:</strong> Implementing caching, lazy loading, and efficient data handling to boost load times.
			</li>
			<li>
				<strong>Modern JavaScript:</strong> Leveraging ES6+, React, and Next.js for high-performing, modular, and maintainable code.
			</li>
			<li>
				<strong>SEO and Accessibility:</strong> Enhancing search visibility and inclusivity through structured data and accessible design.
			</li>
			<li>
				<strong>Backend Integration:</strong> Building secure APIs and connecting to databases like MongoDB for seamless user experiences.
			</li>
		</ul>
	</div>
);

const AppDevelopment = () => (
	<div className="p-4 sm:p-6 rounded-lg shadow-md text-white border border-teal-700">
		<h3 className="text-xl sm:text-2xl font-semibold mb-4">App Development</h3>
		<ul className="list-disc list-inside space-y-2 sm:space-y-3 pl-4">
			<li>
				<strong>Cross-Platform Apps:</strong> Developing apps with React Native to deliver consistent user experiences on Android and iOS.
			</li>
			<li>
				<strong>User-Centric Interfaces:</strong> Designing intuitive, visually appealing interfaces focused on usability.
			</li>
			<li>
				<strong>Data Management:</strong> Implementing robust storage and real-time syncing for seamless data access and management.
			</li>
			<li>
				<strong>Testing and QA:</strong> Ensuring reliability through rigorous testing across devices and operating systems.
			</li>
			<li>
				<strong>Security:</strong> Employing best practices in data protection and secure communication between front-end and back-end.
			</li>
		</ul>
	</div>
);

const AboutUsSection = () => {
	const data = [
		{
			label: "Web ",
			value: "web-development",
			content: <WebDevelopment />,
		},
		{
			label: "App",
			value: "app-development",
			content: <AppDevelopment />,
		},
	];

	const tools = [
		{
			id: 4,
			name: "MongoDB",
			image: "/path/to/mongodb-icon.png",
		},
		{
			id: 1,
			name: "React",
			image: "/images/ex.png",
		},
		{
			id: 2,
			name: "Cloudinary",
			image: "/path/to/cloudinary-icon.png",
		},
		{
			id: 3,
			name: "Node",
			image: "/images/nextjs.png",
		},
	];

	return (
		<div className="w-full min-h-screen" id="projects">
			<div className="flex flex-col justify-center items-center py-10 md:py-16 px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-4xl">
					<section className="py-12 bg-transparent">
						<div className="container mx-auto">
							<p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
								Our Expertise
							</p>

							{/* Expertise Tabs */}
							<Tabs
								id="custom-animation"
								value="web-development"
								className="mt-8 sm:mt-10"
							>
								<TabsHeader className="bg-transparent rounded-lg p-4 shadow-md text-sm sm:text-base md:text-lg">
									{data.map(({ label, value }) => (
										<Tab
											key={value}
											value={value}
											className="text-main peer-checked:text-white goldman-regular px-2 sm:px-4 transition-colors duration-300"
										>
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
									className="rounded-lg sm:p-8 mt-6"
								>
									{data.map(({ value, content }) => (
										<TabPanel key={value} value={value}>
											{content}
										</TabPanel>
									))}
								</TabsBody>
							</Tabs>

						</div>

						{/* Tech Stack Section */}
						<p className="text-3xl md:text-4xl lg:text-5xl mt-12 font-bold text-center text-indigo-200">
							Tech Stack
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 sm:mt-10 px-4">
							<AnimatedTooltip items={tools} />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default AboutUsSection;
