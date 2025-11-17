import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Users from './pages/Users'
import UserProfile from './pages/UserProfile'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <h1>
              <Home />
            </h1>
          }
        />
        <Route
          path="/users"
          element={
            <h1>
              <Users />
            </h1>
          }
        />
        <Route
          path="/UserProfile"
          element={
            <h1>
              <UserProfile />
            </h1>
          }
        />
      </Routes>
    </div>
  )
}

export default App
