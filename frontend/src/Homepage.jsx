import { useEffect, useState, React } from 'react';
import {Link} from 'react-router';

export default function Homepage() {

    const [message, setMessage] = useState(null);
    const [userName, setUsername] = useState(false)
    const [name, setName] = useState("")
    const msg = new SpeechSynthesisUtterance()

    const submit = (e) => {
        e.preventDefault();
        console.log(message)
        setUsername(true)
    }


    useEffect(() => {
        msg.text = "Hi, I'm Maya, what's your name?"
        window.speechSynthesis.speak(msg)
    }, [])

    return (
        <>
        <main className="grid place-items-center w-screen h-screen 
        bg-gradient-to-tr from-blue-200 to-blue-600 via-blue-400 animate-gradient-xy">
            <div>
            <a href="/Aboutpage" className='text-sm text-white hover:text-blue-600 m-2 mr-10 m absolute top-0 right-0'>About Us</a>
            </div>
            <div className="grid place-items-center w-3/4 rounded bg-">
                <h1 className="text-6xl text-white">Hi, I'm Maya</h1>
                <span className="label-text text-lg text-white my-5">What is your name?</span>
                <form onSubmit={submit}>
                    <div className="form-control w-full max-w-xs ">
                        <input onChange={(event) => setMessage(event.target.value)} type="text" placeholder="Your Name Here" className="input input-bordered w-full max-w-xs bg-white" />
                        <a href="/Mainpage" onClick={
                            () => {
                                localStorage.setItem("name", message)
                            }
                        } className="btn btn-wide glass bg-white text-blue-600 m-2 mt-5">Continue</a>
                    </div>
                </form>
                <a href="/Mainpage" className="text-sm m-2 text-white hover:text-blue-600">Continue without name</a>
            </div>
            <div>
                <p className="text-white">By: Grace, Bob, Brian, Jennifer</p>
            </div>
        </main>
        </>
    )
}