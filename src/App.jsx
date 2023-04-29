import { Login, Register, Home, ForgetPassword } from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";
import { useContext } from 'react';

function App() {
  const contextData = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (contextData === null) {
      return <Navigate to='/login' />
    }
    return children
  }

  return (
    <>
      <div className="">
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Routes>
      </div>
    </>
  )
}

export default App
