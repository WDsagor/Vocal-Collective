import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPush'

const SongCard = ({song, isPlaying, activeSong, index}) => {
  const dispatch = useDispatch();
  console.log(song)
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, index}));
    dispatch(playPause(true));
  };
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.trackMetadata?.trackName === song.trackMetadata?.trackName ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div> 
        <img alt="song_img" src={song?.images[0]?.url} className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song?.name}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1 uppercase">
        {song?.type}
        </p>
        <p className="text-xs truncate text-gray-300 mt-1">
        {song?.release_date}
        </p>
      </div>
    </div>
  )
}

export default SongCard