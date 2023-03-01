import React from 'react'
import { loadingImg } from '../../assets'


const Loading = ({title}) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
    <img src={loadingImg} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">{title || 'Loading'}</h1>
  </div>
  )
}

export default Loading