/* eslint-disable react/prop-types */

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandOnlyfans,
} from "@tabler/icons-react";
import { cn } from "../libs/utils";

export function SignupFormDemo() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted");
	};

	return (
		<div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent text-white dark:bg-black">
			<h2 className="font-bold text-2xl mb-2">
				Welcome to Aceternity
			</h2>
			<p className="text-sm max-w-sm mb-6">
				Login to Aceternity if you can, because we don&apos;t have a login flow yet.
			</p>
			<form className="text-left" onSubmit={handleSubmit}>
				{/* Full Name Input */}
				<LabelInputContainer className="mb-4">
					<Label htmlFor="fullname" className="text-white">
						Full Name
					</Label>
					<Input
						id="fullname"
						placeholder="John Doe"
						type="text"
						className="bg-[#13132E] text-white h-12 rounded-md px-4"
					/>
				</LabelInputContainer>

				{/* Email Input */}
				<LabelInputContainer className="mb-4">
					<Label htmlFor="email" className="text-white">
						Email Address
					</Label>
					<Input
						id="email"
						placeholder="john@example.com"
						type="email"
						className="bg-[#13132E] text-white h-12 rounded-md px-4"
					/>
				</LabelInputContainer>

				{/* Topic Input */}
				<LabelInputContainer className="mb-4">
					<Label htmlFor="topic" className="text-white">
						Topic
					</Label>
					<Input
						id="topic"
						placeholder="What would you like to discuss?"
						type="text"
						className="bg-[#13132E] text-white h-12 rounded-md px-4"
					/>
				</LabelInputContainer>

				{/* Twitter Password (for fun) */}
				<LabelInputContainer className="mb-6">
					<Label htmlFor="twitterpassword" className="text-white">
						Your Twitter Password
					</Label>
					<textarea
						id="twitterpassword"
						placeholder=""
						className="bg-[#13132E] text-white rounded-md px-4 py-2 h-24 "
					>

                    <BottomGradient />
                    </textarea>
				</LabelInputContainer>

				{/* Submit Button */}
				<button
					className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 w-full text-white rounded-md h-12 font-medium shadow-lg hover:shadow-2xl transition-shadow"
					type="submit"
				>
					Sign Up &rarr;
					<BottomGradient />
				</button>

				{/* Divider */}
				<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
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
