/* eslint-disable react/prop-types */

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../libs/utils";

export function SignupFormDemo() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted");
	};

	return (
		<div className=" w-full mx-auto  md:rounded-2xl p-4 md:p-8 shadow-2xl border border-[#13132E] rounded-xl bg-transparent text-white dark:bg-black ">
			<form className="text-left text-md w-full font-semibold" onSubmit={handleSubmit}>
				{/* Name Input */}
				<LabelInputContainer className="mb-4">
					<Label htmlFor="name" className="text-white font-semibold">
						Your Name
					</Label>
					<Input
						id="name"
						placeholder="Enter your name"
						type="text"
						className="bg-[#13132E] text-white h-12 rounded-md px-4"
					/>
				</LabelInputContainer>

				{/* Email Input */}
				<LabelInputContainer className="mb-4">
					<Label htmlFor="email" className="text-white font-semibold">
						Your Email Address
					</Label>
					<Input
						id="email"
						placeholder="Enter your email"
						type="email"
						className="bg-[#13132E] text-white h-12 rounded-md px-4"
					/>
				</LabelInputContainer>

				{/* Project Type Input */}
				<LabelInputContainer className="mb-4 ">
					<Label htmlFor="projectType" className="text-white font-semibold">
						Project Type
					</Label>
					<Input
						id="projectType"
						placeholder="Website, eCommerce, etc."
						type="text"
						className="bg-[#13132E] text-white h-12 rounded-md px-4"
					/>
				</LabelInputContainer>

				{/* Message Input */}
				<LabelInputContainer className="mb-6">
					<Label htmlFor="message" className="text-white text-md ">
						Message
					</Label>
					<textarea
						id="message"
						placeholder="Describe your project"
						className="bg-[#13132E] text-white rounded-md text-sm py-2 px-4 min-h-24"
					></textarea>
				</LabelInputContainer>

				{/* Submit Button */}
				<button
					className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 w-full text-white text-xl rounded-md h-12 font-medium shadow-lg hover:shadow-2xl transition-shadow"
					type="submit"
				>
					Send Message
					<BottomGradient />
				</button>

			</form>
		</div>
	);
}

// The bottom gradient used in the button
const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

// Container component to wrap input and label
const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
