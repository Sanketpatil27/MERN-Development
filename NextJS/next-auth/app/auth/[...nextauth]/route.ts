import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest, args:any) {
    console.log(args.params.nextauth);      // here nextauth is the name that we gave to the [...nextauth] folder 
    return NextResponse.json({
        message: "ask"
    })
}

export function POST() {
    return NextResponse.json({
        msg: "hello"
    })
}