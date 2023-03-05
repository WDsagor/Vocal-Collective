import React from 'react'

const DataError = ({message}) => {
  return (
    <div className="w-full flex justify-center items-center">
    <h1 className="font-bold text-2xl text-white">{message}</h1>
  </div>
  )
}

export default DataError