import Navbar from "../components/Navbar";
import { SignupFormDemo } from "../components/SignUpForm";
import { TracingBeam } from "../components/ui/tracing-beam";
import AboutUsSection from "./AboutUsSection";
import ContactUsSection from "./ContactUsSection";
import Herosection from "./Herosection";
import ProjectSections from "./ProjectSections";

const Home = () => {
	return (
		<div className="w-full text-center text-4xl text-white pt-8 section-bg">
			<Herosection />
			<ContactUsSection />
		</div>
	);
};

export default Home;
