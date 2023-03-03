import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { SearchArea } from '../pages';
import MusicPlayer from './MusicPlayer/Index';
import Sidebar from './SideBar';
import TopPlayArea from './TopPlayArea';




const Share = () => {
  const { activeSong } = useSelector((state) => state.player);
  console.log(activeSong)
    return (
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

      {activeSong?.trackMetadata?.trackName &&
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
        
      }
    
    </div>
    );
};

export default Share;