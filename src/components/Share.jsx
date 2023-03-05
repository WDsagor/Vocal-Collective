import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { SearchArea, ConnectSpotify } from '../pages';
import { setToken } from '../redux/features/playerSlice';
import MusicPlayer from './MusicPlayer/Index';
import Sidebar from './SideBar';
import TopPlayArea from './TopPlayArea';




const Share = () => {
  const { activeSong, token } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  useEffect(() => {
    const hash = window.location.hash;
    // console.log(hash)

    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch(setToken(token));
        
      }
    }
  }, [dispatch, token]);
  return (
    <div>
      {
        !token ? <ConnectSpotify/> : (
          <div className="relative flex">
        <Sidebar/>
        
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
          <SearchArea />
  
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              
               <Outlet/>
             
            </div>
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlayArea />
            </div>
          </div>
        </div>
  
        {activeSong?.trackMetadata?.trackUri && 
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
          }
          
      
      
      </div>
      )
      }
    </div>
  )
};

export default Share;