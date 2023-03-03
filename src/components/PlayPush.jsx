import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPush = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.trackMetadata?.trackName === song?.trackMetadata?.trackName ? (
  <FaPauseCircle
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
));

export default PlayPush