import Navbar from '../components/Navbar';
import AboutUsSection from './AboutUsSection';
import Herosection from './Herosection';
import ProjectSectios from './ProjectSections';

const Home = () => {
    return (
        <>
            <div className="w-full text-center text-4xl text-white pt-8 section-bg">
                <Navbar/>
                <Herosection/>
                <AboutUsSection/>
            </div>
        </>
    );
};

export default Home;
