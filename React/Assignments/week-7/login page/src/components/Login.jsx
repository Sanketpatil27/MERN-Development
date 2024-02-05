import { useState } from "react";
import "../App.css"

export function Login() {
    const [otp, setOtp] = useState(true);
    
    return <div id="container">
        <h1> Login Via OTP</h1>
        
        <div>
            {otp && <input type="text" placeholder="Enter Your Mobile Number" />}
            {!otp && <div class="mb-6 text-center">
                        <div id="otp" class="flex justify-center">
                            <input class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="first" maxlength="1" />
                            <input class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="second" maxlength="1" />
                            <input class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="third" maxlength="1" />
                            <input class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="fourth" maxlength="1" />
                        </div>  
                    </div>}
            <br />
            <button onClick={(e) => {
                e.target.innerHTML == "Login Here" ? e.target.innerHTML = "Send OTP" : e.target.innerHTML = "Login Here"
                setOtp(!otp);
            }}>Send OTP</button>
        </div>
    </div>
}