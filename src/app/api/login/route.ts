import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { username, password } = await req.json();

    if(username === "admin" && password === "Admin_saet2023") {
        const now = new Date();
        const timestamp = now.getTime();
        const token = timestamp + 60 * 60 * 3;
        const hexToken = token.toString(16);
        return NextResponse.json({
            token: hexToken
        });
        
    }else {
        return new Response("Usuário ou senha incorretos", {
            status: 401,
        })
    }
}