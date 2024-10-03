
import {Link} from 'react-router-dom'; // Assuming you're using Next.js for routing

const Footer = () => {
  return (
    <footer className="bg-white py-4 shadow-md goldman-regular">
      <div className="container mx-auto flex flex-col gap-4 justify-between items-center">
        
        {/* Links */}
        <ul className="flex flex-col md:flex-row gap-4">
          <li>
            <Link href="/">
              <a className="text-gray-600 hover:text-gray-900">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="text-gray-600 hover:text-gray-900">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a className="text-gray-600 hover:text-gray-900">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a className="text-gray-600 hover:text-gray-900">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/testimonials">
              <a className="text-gray-600 hover:text-gray-900">Testimonials</a>
            </Link>
          </li>
        </ul>
        <div className="text-xs md:text-sm ">
          &copy; Copyrights 2024. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
