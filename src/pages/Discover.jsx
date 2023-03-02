import React from 'react'
import {genres} from "../assets/index"
import {SongCard} from './../components';


const Discover = () => {
  const gentitle = "Pop";
  return (
       <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h1 className='font-bold text-3xl text-white text-left'>Discover</h1>
        <select 
        onChange={()=>{}}
        value= ""
        className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
          {genres.map((genre, index) => <option key={index} value={genre.value}>{genre.title}</option>)}
        </select>
        </div> 
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
          {[0,1,2,3,4,5,6,7,8,9].map((song, index)=>(

          <SongCard
          key={index}
          song= {song}
          index={index}
          />
          ))}
        </div>
        </div>
  )
}

export default Discover