import React from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
		<div>
			<p>Microphone: {listening ? "on" : "off"}</p>
			<button
				onClick={() => {
					resetTranscript;
					SpeechRecognition.startListening();
				}}
			>
				Start
			</button>
			<button onClick={SpeechRecognition.stopListening}>Stop</button>
			<p>{transcript}</p>
		</div>
	);
};
export default Dictaphone;
