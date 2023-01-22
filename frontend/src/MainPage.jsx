import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicRecorder from 'mic-recorder-to-mp3';
import { useState } from 'react';
import { checkPropTypes } from 'prop-types';

const Dictaphone = () => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const MicRecorder = require('mic-recorder-to-mp3');

    const Mp3Recorder = new MicRecorder({ bitRate: 128});
  
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
          <button className="btn btn-success mx-5" onClick={() => {
          SpeechRecognition.startListening
          Mp3Recorder.start().then(() =>  {
            //something
          }).catch((e) => {
            console.error(e);
          });
          }}>Start</button>
          <button className="btn btn-error mx-5" onClick={() => {
          SpeechRecognition.stopListening
          Mp3Recorder.stop().getMp3().then(([buffer, blob]) => {
            const file = new File(buffer, "input.mp3", {
              type: blob.type,
              lastModified: Date.now()
            });

            const player = new Audio(URL.createObjectURL(file));
            player.play();
            
            }).catch((e) => {
              alert("We could not retrieve your message");
              console.log(e);
            });
          }}>Stop</button>
          <button className="btn btn-warning mx-5" onClick={resetTranscript}>Reset</button>
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
          <h1 className="text-6xl text-white">Let's Talk!</h1>
        <div className="text-2xl text-white">
            <Dictaphone />
            <Response resp={resp}/>
        </div>
        <button className="btn bg-white text-black" onClick={() => setResp("This is random ass text")}>ahhhhh</button>
        </main>
    )
}