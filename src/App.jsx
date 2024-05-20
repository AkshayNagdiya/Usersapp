import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import "./index.css";
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound';
import UserPage from './Pages/UserPage';

const App = () => {

    const [theme,settheme] = useState(false)

    const changetheme =()=>{
        if(theme){
            settheme(false)
        }else{
            settheme(true)
        }
    }


  return (
    <BrowserRouter>
     <Navbar changetheme={changetheme}  theme={theme}  />
     <Routes>
       <Route path='*' element={<PageNotFound />} />
       <Route path='/' element={<Home />} />
       <Route path='/About' element={<About />} />
       <Route path='/user/:id' element={<UserPage />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
