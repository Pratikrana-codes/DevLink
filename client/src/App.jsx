import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPopup from './components/LoginPopup';
// import { UserProvider } from './src/Context/Context.jsx';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';
import ProtectedRoute from './utils/ProtectedRoute';
import { UserProvider } from './Context/Context.jsx';

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