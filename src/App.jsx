 import React, { useEffect }  from 'react'
 import Page from './pages/page' 
 import Header from './component/Header'
 import Page2 from './pages/Page2'
 import Page3 from './pages/page3'
 import Page4 from './pages/page4'
 import Page5 from './pages/page5'
 import Page6 from './pages/page6'
 import Page7 from './pages/page7'
 import Page8 from './pages/page8'
 import Page9 from './pages/page9'
 import Page10 from './pages/page10'
import Page11 from './pages/page11'
import Page12 from './pages/page12'
import Page13 from './pages/page13'
import MenuPage from './pages/MenuPage'
import LocomotiveScroll from 'locomotive-scroll';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// for locaomotive search in google "locomotive v5"
 const App = () => {
  const router = createBrowserRouter([
    {
      path  :"/",
      element :<> 
      <Header />
      <Page />
      <Page2 />

      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
      <Page11 /> 
      <Page3 />
      <Page13/>
</>
    },
    {
      path  :"/menu",
      element : <MenuPage />,
      
    }
  ])
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])
  
  
   return (
     <>
       <div  className=' fixed-backgo croll-container overflow-x-hidden  '>
       {/* <Header />
       <Page />
       <Page2 />

       <Page4 />
       <Page5 />
       <Page6 />
       <Page7 />
       <Page8 />
       <Page9 />
       <Page10 />
       <Page11 /> 
       <Page3 />
       <Page13/> */}
      {/* <MenuPage /> */}
       
      {/* <Page12 /> */}
      <RouterProvider router={router} />
       </div>
     </>
   )
 }
 
 export default App
 