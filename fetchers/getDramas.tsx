const ApiKey:string = process.env.NEXT_PUBLIC_API_KEY as string
export const getDramas = async ()=>{
    const res = await fetch(`${process.env.BASE_URL}discover/movie?with_genres=18`,{
        method:"GET",
        headers:{
            accept: 'application/json',
            Authorization: ApiKey 
        }
    })
    if(!res.ok){
        throw new Error('failed to fetc data')
    }

    
  
    const allData = await res.json()
    const data = allData.results
      return data
}