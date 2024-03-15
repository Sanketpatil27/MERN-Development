"use server"        // ****** have to be the use server for server actions

import client from "@/db"

// exposing a server action
export default async function signup(email: string, password: string) {

    try {
        await client.user.create({
            data: {
                email: email,
                password: password,
            }
        })
    } catch(e) {
        return false
    }

    return true
}