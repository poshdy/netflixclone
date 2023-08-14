'use client'
import React, { useState , useContext , createContext } from "react"
import { createClient } from "@/lib/supabase-client"

import type { SupabaseClient} from '@supabase/auth-helpers-nextjs'




const Context = createContext<SupabaseClient | undefined>(undefined)
export default function SupabaseProvider({children}:{children: React.ReactNode}){

const [supabase] = useState(()=>createClient())

return(
    <Context.Provider value={supabase}>
        <>{children}</>
    </Context.Provider>
)
}
export const useSupabase = ()=>{
    let context = useContext(Context)
    if(context === undefined){
        throw new Error('useSupabase must used in supabase provider')
    } else{
        return context
    }
}