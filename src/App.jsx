import { RouterProvider } from "react-router-dom"

import { routes } from "./routes"


import React from 'react';


const  App =()=> {
  return (
    <>
   
         <RouterProvider router={routes} />

    </>
  )
}

export default App
