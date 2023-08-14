import { removeNullImgs } from "@/lib/removeNullImg"

const ApiKey:string = process.env.NEXT_PUBLIC_API_KEY as string
export const getCollection = async (collectionid: string | number | null)=>{
    const res = await fetch(`${process.env.BASE_URL}collection/${collectionid}`,{
        method:"GET",
        headers:{
            accept: 'application/json',
            Authorization: ApiKey 
        }
    })
    
    if(!res.ok){
        throw new Error('failed to fetch data')
    }

    const Alldata = await res.json()
    const data = await Alldata.parts
  const finalData = removeNullImgs(data)
    return finalData
}