import React from 'react'
import { useSelector } from 'react-redux';
import {genres} from "../assets/index"
import DataError from '../components/share/DataError';
import Loading from '../components/share/Loading';
import { useGetTwoHundresSongQuery } from '../redux/services/spotifyApi';
import {SongCard} from './../components';


const Discover = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {data, isFetching, error} = useGetTwoHundresSongQuery() 
  const gentitle = "Pop";
  if(isFetching) return <Loading/>
  if(error) return <DataError/>
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
          {data.map((song, index)=>(
          <SongCard
          key={index}
          song= {song}
          data={data}
          index={index}
          isPlaying={isPlaying}
          activeSong={activeSong}
          />
          ))}
        </div>
        </div>
  )
}

export default Discover