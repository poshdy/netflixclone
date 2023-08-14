import { getCast } from '@/fetchers/Details/getCast';
import React from 'react'

const Cast = async ({id,type}:{id :string | number , type:string}) => {
    const AllCast = await getCast(id ,type );
    const Cast: ACTOR[] = AllCast.cast.slice(0, 5);
  return (
    <div className="flex flex-wrap items-center text-secondary text-xs font-bold gap-1 md:gap-2 ">
    <p>Starting</p>
    {Cast.map((actor) => (
      <p key={actor.id} className='w-16 truncate md:w-fit' >{actor.name}</p>
    ))}
  </div>
  )
}

export default Cast