
let Name = null;

export default function Homepage() {
    return (
        <main className="grid place-items-center w-screen h-screen bg-blue-400">
            <div className="mt-10">
                <h1 className="text-2xl text-white">Hi, I'm Maya</h1>
            </div>
            <div className="grid place-items-center w-3/4 rounded bg-">
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                      <span className="label-text text-lg text-white">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Your Name Here" className="input input-bordered w-full max-w-xs bg-white" />
                </div>
                <button className="btn btn-wide glass bg-white text-blue-600 m-2 mt-5">Continue</button>
                <button className="text-sm m-2 text-white hover:text-blue-600">Continue without name</button>
            </div>
            
        </main>
    )
}