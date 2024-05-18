import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import client from "@/db"

// this is not good practice to send request from server to server, we directly use this endpoint in where we want 
// this is used in user/page.tsx

// export async function GET(req: NextRequest) {
    // const user = await client.user.findFirst();

//     return NextResponse.json({
//         email: user?.email,
//         name: 'dummy'
//     })
// }


// ****** instead this we will using server actions ******

export async function POST(req: NextRequest) {
    // getting body, headers & query params 
    const body = await req.json();          // don't need express.json() middleware for post request here
    // console.log(body);
    // console.log(req.headers.get('authorization'));
    // console.log(req.nextUrl.searchParams.get('name'));
    
    // hit database with email password
    try {
        await client.user.create({
            data: {
                email: body.email,
                password: body.password,
            }
        })
    } catch(e) {
        return NextResponse.json({
            error: 'error while sign in'
        }, {
            status: 411
        })
    }

    return NextResponse.json({
        body
    })
}