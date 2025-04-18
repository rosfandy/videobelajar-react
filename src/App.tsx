import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedRoute from './middleware/ProtectedRoute'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Routes>
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
