import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPopup from './components/LoginPopup';
// import { UserProvider } from './src/Context/Context.jsx';
import { UserProvider } from './ContextApi/Context.jsx';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';
import ProtectedRoute from './utils/ProtectedRoute';
import NotFound from './components/NotFound.jsx';

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
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App