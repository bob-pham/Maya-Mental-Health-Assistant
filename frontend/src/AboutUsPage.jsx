import { useState, useEffect, useRef } from 'react';

export default function AboutUsPage() {

    return (
       

        <div class="h-[1300px] bg-blue-500 w-screen grid place-items-center
        bg-gradient-to-tr from-blue-200 to-blue-600 via-blue-400 animate-gradient-xy">
            <div>
                <a href="/Homepage" className='text-sm text-white hover:text-blue-600 m-2 mr-10 m absolute top-0 right-0'>Home Page</a>
            </div>
            <div className="m-11 text-white max-w-7xl absolute top-20">
                <h1 className="text-4xl">Maya, Mental Health Assistant</h1>
                <p className="text-lg mt-5">Mental health call services are often overburdened with people using them for a variety of reasons. The goal of Maya is to separate more urgent requests from those that might be solved through more basic means, such as Cognitive Behavioural Therapy.</p>
                <p className="text-lg mt-5">Ideally, Maya could be integrated into home assistants like Amazon Echo, Google Home, or Siri, to detect when a person may be in distress and perform the necessary steps to either stablize their condition or connect them with a mental health hotline, should it seem necessary. This will lighten the load of hotlines, ensuring that people who are higher risk get through faster, and aren't stuck waiting for an operator on the other end.</p>
                <p className="text-lg mt-5">Maya uses live audio transcription and looks for keywords to determine whether a person may be high risk or lower risk, and takes the appropriate action given what it believes the situation to be.</p>
            
                <div className="mt-5">
                <h2 className="text-4xl">The Team</h2>
                <div className="grid grid-cols-4 gap-5 flex items-center">
                    <div className="mt-5 grid place-items-center">
                        <img src="https://www.nicepng.com/png/detail/54-543844_elegant-cartoon-flower-flower-cartoon-png-clipart-best.png" 
                            alt="Grace" 
                            className="object-cover w-36 h-36 shadow rounded-lg"/>
                        <h3 className="text-xl mt-5">Grace Guan</h3>
                        <p>Designer</p>
                    </div>

                    <div className="mt-5 grid place-items-center">
                        <img src="https://www.pngitem.com/pimgs/m/157-1573867_bob-the-builder-png-pictures-bob-the-builder.png" 
                            alt="Bob" 
                            className="object-cover w-36 h-36 shadow rounded-lg"/>
                        <h3 className=" text-xl mt-5">Bob Pham</h3>
                        <p>Head Developer</p>
                    </div>

                    <div className="mt-5 grid place-items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Guitar_Hero_II_guitar_controllers.jpg/1200px-Guitar_Hero_II_guitar_controllers.jpg" 
                            alt="Brain" 
                            className="object-cover w-36 h-36 shadow rounded-lg"/>
                        <h3 className="text-xl mt-5">Brian Berger</h3>
                        <p>Developer</p>
                    </div>

                    <div className="mt-5 grid place-items-center">
                        <img src="https://www.nicepng.com/png/detail/54-543844_elegant-cartoon-flower-flower-cartoon-png-clipart-best.png" 
                            alt="Grace" 
                            className="object-cover w-36 h-36 shadow rounded-lg"/>
                        <h3 className="text-xl mt-5">Jennifer Nguyen</h3>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
            </div>

        </div>

    )

}