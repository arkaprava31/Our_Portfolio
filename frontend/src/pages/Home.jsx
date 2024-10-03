import Navbar from "../components/Navbar";
import { TracingBeam } from "../components/ui/tracing-beam";
import AboutUsSection from "./AboutUsSection";
import Herosection from "./Herosection";
import ProjectSections from "./ProjectSections";

const Home = () => {
	return (
		<>
			<div className="w-full text-center text-4xl text-white pt-8 section-bg">
				<Herosection />

				<AboutUsSection />
				<ProjectSections />
			</div>
		</>
	);
};

export default Home;
