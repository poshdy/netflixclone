import { NextResponse , NextRequest } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import 'server-only'
export  async function GET(req:NextRequest){
    const supabase = createRouteHandlerClient({cookies})
    const {searchParams} = new URL(req.url)
    const code = searchParams.get('code')
    if(code){
        await supabase.auth.exchangeCodeForSession(code)
    }
    return NextResponse.redirect(new URL('/', req.url))
}