const ApiKey:string = process.env.NEXT_PUBLIC_API_KEY as string
export const getEpisodes = async (moiveid: string | number ,seasonNo:string | number | null)=>{
    const res = await fetch(`${process.env.BASE_URL}tv/${moiveid}/season/${seasonNo}`,{
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
    const filterdData = data.episodes
  
    return await filterdData
}