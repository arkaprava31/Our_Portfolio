/* eslint-disable react/no-unescaped-entities */
const AboutUsSection = () => {
	return (
		<div className="min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center">
			{/* Header Section */}
			<div className="min-h-[200px] bg-[#EAEAEA] flex items-center justify-center" id="projects">
				<p className="text-black text-2xl md:text-3xl font-semibold text-center">
					"Coding Your Vision to Reality"
				</p>
			</div>

			{/* Expertise Section */}
			<div className="flex flex-col justify-between items-center py-10 md:py-16">
				<div className="mx-auto w-11/12 max-w-5xl">
					<p className="text-xl md:text-2xl font-bold text-center">Our Expertise</p>
					<p className="mt-4 text-lg md:text-xl text-center">Out skills description here</p>
				</div>
			</div>

			{/* Projects Section */}
			<div className="py-10 md:py-16">
				<p className="text-2xl font-bold text-center mb-8">Projects</p>
				<div className="flex flex-wrap justify-center gap-6">
					{/* Placeholder for project cards */}
					<div className="bg-white shadow-md p-4 w-80 md:w-[320px] lg:w-[400px] h-[200px]">
						Project Card 1
					</div>
					<div className="bg-white shadow-md p-4 w-80 md:w-[320px] lg:w-[400px] h-[200px]">
						Project Card 2
					</div>
					<div className="bg-white shadow-md p-4 w-80 md:w-[320px] lg:w-[400px] h-[200px]">
						Project Card 3
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsSection;
