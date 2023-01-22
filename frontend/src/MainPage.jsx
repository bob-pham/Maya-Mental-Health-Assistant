import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
import { checkPropTypes } from 'prop-types';

const Dictaphone = () => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  
    return (
      <div className="grid place-items-center">
        <div className="bg-white text-black rounded-lg p-10 my-5">
          <p>{transcript}</p>
        </div>
        <p className="text-center">Microphone: {listening ? 'on' : 'off'}</p>
        <div>
          <button className="btn btn-success m-5" onClick={SpeechRecognition.startListening}>Start</button>
          <button className="btn btn-error m-5" onClick={SpeechRecognition.stopListening}>Stop</button>
          <button className="btn btn-warning m-5" onClick={resetTranscript}>Reset</button>
        </div>
      </div>
    );
  };

const Response = (props) => {
    return (
      <div className={props.resp ? "bg-white text-black rounded-lg p-10 my-5" : "bg-blue-600"}>
      <p>{props.resp}</p>
      </div>
    );
}

export default function MainPage() {
    const [resp, setResp] = useState("")

    return (
        <main className="bg-blue-500 w-screen h-screen grid place-items-center">
          <h1 className="text-5xl text-white place-items-center m-8">Hey *user name or nothing*, what's on your mind?</h1>
        <div className="text-2xl text-white">
            <Dictaphone />
            <Response resp={resp}/>
        </div>
        <button className="btn bg-white text-black" onClick={() => setResp("This is random ass text")}>ahhhhh</button>
        </main>
    )
}