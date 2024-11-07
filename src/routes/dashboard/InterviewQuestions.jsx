import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInterview } from "@/api/interview";
import { addQuestions } from "@/redux/slices/questionsSlice";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { Lightbulb, LoaderCircle } from "lucide-react";
import { RECORD_INFO } from "@/utils/constants";
import Webcam from "react-webcam";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "regenerator-runtime/runtime";

const InterviewQuestions = () => {
	const questions = useSelector((state) => state?.questions?.questions) || [];
	const dispatch = useDispatch();
	const { mockId } = useParams();
	const [loading, setLoading] = useState(false);
	const [currentQuestionIdx, setCurrentQuestionIdx] = useState(1);
	const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

	const getInterviewData = async () => {
		try {
			setLoading(true);
			const res = await getInterview(mockId);
			console.log(res);

			if (!questions.length) {
				dispatch(addQuestions(res.jsonMockResp));
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!questions.length) getInterviewData();
	}, []);

	const handlePrev = () => {
		setCurrentQuestionIdx((prev) => Math.max(1, prev - 1));
	};

	const handleNext = () => {
		setCurrentQuestionIdx((prev) => Math.min(questions.length, prev + 1));
	};

	const handleRecord = () => {
		if (listening) {
			SpeechRecognition.stopListening();
		} else {
			resetTranscript();
			SpeechRecognition.startListening({ continuous: true });
		}
	};

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	if (loading) return <LoaderCircle className="animate-spin" />;

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-20 mt-2 lg:mt-6 lg:gap-8">
				{/* Left panel for left side questions */}
				<div className="border-2 border-secondary rounded-lg shadow-sm p-6">
					<div className="flex gap-4 flex-wrap">
						{questions.map((item, index) => (
							<Button
								variant="secondary"
								className={classNames(
									"border border-gray-300 shadow-sm hover:scale-105 transition-transform p-1 px-4 rounded-2xl font-semibold",
									{
										"bg-primary text-primary-foreground hover:text-background hover:bg-primary": currentQuestionIdx === index + 1,
									}
								)}
								onClick={() => setCurrentQuestionIdx(index + 1)}
							>{`Question ${index + 1}`}</Button>
						))}
					</div>

					<h1 className="mt-6 text-lg font-medium h-40">{questions?.[currentQuestionIdx - 1]?.["question"]}</h1>

					<div className="flex justify-between">
						<Button variant="secondary" className="mt-6 justify-self-center hover:scale-105" onClick={handlePrev}>
							Previous
						</Button>
						<Button variant="secondary" className="mt-6 justify-self-center hover:scale-105" onClick={handleNext}>
							Next
						</Button>
					</div>

					<div className="p-4 border border-blue-300 bg-blue-100 rounded-lg text-base grid gap-2 mt-8 text-blue-500">
						<span className="flex gap-2">
							<Lightbulb /> <strong>Note</strong>
						</span>
						<p>{RECORD_INFO}</p>
					</div>
				</div>

				{/* Right panel for webcam */}
				<div className="grid">
					<Webcam mirrored />
					<div className="h-32 overflow-y-auto">
						<p>{transcript}</p>
					</div>
					<Button variant="secondary" className="mt-6 justify-self-center hover:scale-105" onClick={handleRecord}>
						{listening ? "Save" : "Record Answer"}
					</Button>
				</div>
			</div>
			<div className="grid justify-end">
				<Button disabled className="hover:scale-105">
					Submit Interview
				</Button>
			</div>
		</>
	);
};

export default InterviewQuestions;
