import { SignupFormDemo } from "../components/SignUpForm";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactUsSection = () => {
	return (
		<div className="section-bg2 flex flex-col items-center gap-10 px-6 py-16 lg:px-16 lg:py-24">
			<motion.p
				className="font-semibold text-white text-lg"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				Contact Us
			</motion.p>
			<div className="flex flex-col lg:flex-row items-start justify-between gap-4 text-left w-full max-w-screen-2xl">
				<div className="w-full lg:w-[40%] space-y-6 lg:ml-10 mt-8">
					<motion.h2
						className="text-4xl lg:text-5xl font-bold text-white"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						Let's Build Something Amazing!
					</motion.h2>
					<motion.p
						className="text-lg text-gray-300"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Have a project in mind? Whether it's a new website, an eCommerce
						store, or something unique, I’m here to help you bring it to life.
						Get in touch, and let's make your vision a reality!
					</motion.p>
					<motion.p
						className="text-lg text-gray-300"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						Fill out the form, and I’ll get back to you as soon as possible to
						discuss your project.
					</motion.p>
					<motion.div
						className="flex gap-6 mt-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<a
							href="https://twitter.com/yourhandle"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-white transition-colors"
						>
							<FaXTwitter size={24} />
						</a>
						<a
							href="https://facebook.com/yourhandle"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-white transition-colors"
						>
							<FaFacebookF size={24} />
						</a>
						<a
							href="https://instagram.com/yourhandle"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-white transition-colors"
						>
							<FaInstagram size={24} />
						</a>
						<a
							href="https://github.com/yourhandle"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-300 hover:text-white transition-colors"
						>
							<FaGithub size={24} />
						</a>
					</motion.div>
				</div>
				<motion.div
					className="w-full lg:w-[55%] mt-10 lg:mt-0"
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<SignupFormDemo />
				</motion.div>
			</div>
		</div>
	);
};

export default ContactUsSection;
