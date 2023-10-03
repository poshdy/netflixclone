import { removeNullImgs } from "@/lib/removeNullImg"

const ApiKey:string = process.env.NEXT_PUBLIC_API_KEY as string
export const getSimilar = async (moiveid: string | number ,Type:string)=>{
    const res = await fetch(`${process.env.NEXT_API_KEY_BASE_URL}${Type}/${moiveid}/recommendations`,{
        method:"GET",
        headers:{
            accept: 'application/json',
            Authorization: ApiKey 
        }
    })
    
    if(!res.ok){
        throw new Error('failed to fetc data')
    }

    const data = await res.json()
    const filteredData = removeNullImgs(data.results)
    const finalData = filteredData.length >= 7 ? filteredData.slice(0,8) : filteredData
    return finalData
}