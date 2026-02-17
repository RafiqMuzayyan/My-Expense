import { NextResponse } from "next/server";

export function middleware(req) {
    const access = req.cookies.get("refreshToken")

    if(!access && req.nextUrl.pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/auth", req.url))
    }
    if(access && req.nextUrl.pathname.startsWith("/auth")){
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    return NextResponse.next()
}