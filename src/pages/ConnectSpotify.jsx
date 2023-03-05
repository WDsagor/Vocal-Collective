import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/features/playerSlice';

const ConnectSpotify = () => {
    const dispatch = useDispatch()
    const imagePaths = [];
Object.values(import.meta.glob("/src/assets/bgAnimation.gif", { eager: true })).forEach(
  ({ default: path }) => {
    const url = new URL(path, import.meta.url);
    const data = {
      path: url.pathname,
    };
    imagePaths.push(data);
  }
);
const handleClick = ()=>{
const clientId = import.meta.env.VITE_clientId;
const redirectUrl = import.meta.env.VITE_redirectUrl;
const apiUrl = import.meta.env.VITE_apiUrl;
const scope =[
    'user-read-email',
    'user-read-private',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played',]
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
      )}&response_type=token&show_dialog=true`;


}
const hash = window.location.hash;
if (hash) {
  const token = hash.substring(1).split("&")[0].split("=")[1];
  localStorage.setItem("Bearer", token)
}
 useEffect(()=>{
  const token = localStorage.getItem("Bearer")
  dispatch(setToken (token));
 },[dispatch])
  return (
    <div style={{
        backgroundImage: `url(${imagePaths[0].path})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"

    }} className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286] h-screen justify-center items-center p-2" >
        <div className=' md:w-1/3 w-full flex justify-center items-center flex-col mt-4 mb-10 border rounded-2xl p-10 shadow-lg shadow-slate-600'>
        <h1 className='font-bold text-3xl text-white text-center uppercase'>Connect your Spotify Account</h1>
        <input onClick={handleClick} type='button' value="Connect" className=' cursor-pointer text-xl bg-green-600 rounded-lg btn py-2 px-4 text-white mt-5'/>
        </div>
    </div>
  )
}

export default ConnectSpotify