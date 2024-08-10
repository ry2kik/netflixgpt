import { checkValidData } from "../utils/Validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const toggleIsSignUp = () => setIsSignIn(!isSignIn);
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //TODO Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(errorMessage != null) return;

        // TODO Sign up / sign in Logic
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(userCredential => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage);
                    console.log(errorCode + ' - ' + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(userCredential => {
                    const user = userCredential.user;
                    console.log(user);
                    console.log('User logged in successfully');
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ' - ' + errorMessage);
                    console.log(errorCode + ' - ' + errorMessage);
                })
        }


    }

    return (
        <div>
            <Header />

            <div className="absolute top-0 mt-28 flex justify-center w-full">
                <form onSubmit={ (e) => e.preventDefault() } className="bg-black bg-opacity-70 px-16 py-12 w-[35%]">
                    <p className="text-white text-3xl font-bold mb-8"> Sign
                        {isSignIn ? ' In' : ' Up'}
                    </p>

                    {
                        !isSignIn && <input ref = { name } type="name" placeholder="Full Name" className="w-full flex justify-center bg-transparent border border-white p-4 rounded-md text-white mb-6" />
                    }

                    <input type="email" ref = { email } placeholder="Email or mobile number" className="w-full flex justify-center bg-transparent border border-white p-4 rounded-md text-white" />

                    <input type="password" ref = { password } placeholder="Password" className="w-full flex justify-center bg-transparent border border-white p-4 rounded-md mt-6 text-white" />

                    {
                        (errorMessage != null) ? (
                            <p className="text-red-500 mt-2">{ errorMessage }</p>
                        ) : ('')
                    }

                    <button className="w-full flex justify-center bg-red-600 text-white mt-5 p-2 rounded" onClick = { handleButtonClick }>Sign {isSignIn ? ' In' : ' Up'}</button>
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
        </div>
    )
}

export default Login;