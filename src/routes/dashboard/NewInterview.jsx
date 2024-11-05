import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { INTERVIEW_TYPES } from "@/utils/constants";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewInterview = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [interviewType, setInterviewType] = useState(INTERVIEW_TYPES[0].id);

	const getFormOptions = () => {
		return (
			<div className="mt-6">
				{interviewType === INTERVIEW_TYPES[0].id ? (
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="email">Upload Resume here</Label>
						<Input id="resume" type="file" />
					</div>
				) : (
					<div className="grid gap-4">
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="email">Job Position/ Role Name</Label>
							<Input id="jobPosition" />
						</div>

						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="email">Job Position/ Role Name</Label>
							<Textarea id="jobPosition" />
						</div>

						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="email">Tech Stack/ Skill Set</Label>
							<Input id="techStack" />
						</div>
					</div>
				)}
				<div className="grid justify-end mt-4">
					<div className="flex gap-4">
						<Button onClick={() => setIsOpen(false)} variant="secondary">
							Cancel
						</Button>
						<Button>Start Interview</Button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="mt-4">
			<button
				onClick={() => setIsOpen(true)}
				className="h-24 w-72 bg-secondary shadow-lg rounded-lg flex justify-center items-center text-xl font-semibold hover:scale-105 transition-all"
			>
				+ New Interview
			</button>

			{/* Dialog for Interview type selection */}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Type of Interview</DialogTitle>
					</DialogHeader>

					<DialogDescription>
						<RadioGroup defaultValue={interviewType} orientation="horizontal" onValueChange={setInterviewType}>
							<div className="flex items-center space-x-4">
								{INTERVIEW_TYPES.map((item) => (
									<div className="flex items-center space-x-2">
										<RadioGroupItem value={item.id} id={item.id} />
										<Label htmlFor={item.id}>{item.label}</Label>
									</div>
								))}
							</div>
						</RadioGroup>

						{getFormOptions()}
					</DialogDescription>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default NewInterview;
