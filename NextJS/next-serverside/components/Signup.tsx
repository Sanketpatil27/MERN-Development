"use client"

import signup from "@/app/actions/user";
import axios from "axios";
import { useState } from "react"

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div className="flex flex-col h-screen border text-white justify-center">
        <div className="flex justify-center ">
            <div className="">
                <input onChange={(e) => {
                    setEmail(e.target.value);
                }} className="p-2 m-2 border w-full" type="text" placeholder="email"/>
                <br />

                <input onChange={(e) => {
                    setPassword(e.target.value);
                }} className="p-2 m-2 border w-full" type="password" placeholder="password"/>
                <br />

                <button onClick={() => {
                    // axios.post("http://localhost:3000/api/user", {
                    //     email,
                    //     password
                    // })

                    // using server actions
                    signup(email, password);
                }} className="p-2 m-2 border w-full">Sign up</button> 
            </div>
        </div>
    </div>
}