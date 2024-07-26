import { useState } from "react"

const Header = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleIsSignUp = () => setIsSignIn(!isSignIn);

    return (
        <>
            <div className="absolute z-10 flex justify-center w-full overflow-hidden">
                <div className="flex w-full max-w-5xl">
                    <img src={"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"} alt="" className="w-48 h-20" />
                </div>
            </div>

            <div className="absolute z-10 mt-28 flex justify-center w-full">
                <form className="bg-black bg-opacity-75 px-16 py-12 w-[35%]">
                    <p className="text-white text-3xl font-bold mb-8"> Sign
                        {isSignIn ? ' In' : ' Up'}
                    </p>

                    {
                        !isSignIn && <input type="name" placeholder="Full Name" className="w-full flex justify-center bg-transparent border border-white p-4 rounded-md text-white mb-6" />
                    }

                    <input type="email" placeholder="Email or mobile number" className="w-full flex justify-center bg-transparent border border-white p-4 rounded-md text-white" />

                    <input type="password" placeholder="Password" className="w-full flex justify-center bg-transparent border border-white p-4 rounded-md mt-6 text-white" />

                    <button className="w-full flex justify-center bg-red-600 text-white mt-5 p-2 rounded">Sign {isSignIn ? ' In' : ' Up'}</button>
                    <p className="mt-8">
                        {
                            isSignIn ? (
                                <>
                                    <span className="text-gray-500">New to Netflix?</span>
                                    <span className="font-bold text-white cursor-pointer" onClick={toggleIsSignUp}> Sign up now.</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-gray-500">Already registered? </span>
                                    <span className="font-bold text-white cursor-pointer" onClick={toggleIsSignUp}>Sign in now.</span>
                                </>
                            )
                        }

                    </p>
                </form>
            </div>
        </>
    )
}

export default Header;