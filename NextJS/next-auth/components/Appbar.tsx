"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Appbar() {
    const session = useSession();
    const router = useRouter();

    return <div>
        <button onClick={() => {
            // router.push("/api/auth/signin");   // or
            signIn();
        }}>Signin</button>
        
        
        <button onClick={() => {
            signOut();
        }}>Logout</button>

        {JSON.stringify(session)}
    </div>
}