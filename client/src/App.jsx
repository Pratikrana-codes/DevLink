import React, { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import LoginPopup from './components/LoginPopup';
import ProtectedRoute from './utils/ProtectedRoute';
import Bookmark from './pages/Bookmark';
import { UserProvider } from "./src/context/Context";

const App = () => {

  const [showLogin , setShowLogin] = useState(false);

  return (
    <div className=''>
      <UserProvider>
        <BrowserRouter>
          {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
        <Routes>
          <Route path='/' element={<Home setShowLogin={setShowLogin}/>}/>
          <Route 
                path='/bookmark'
                element={
                  <ProtectedRoute>
                    <Bookmark/>
                  </ProtectedRoute>
                }/>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App