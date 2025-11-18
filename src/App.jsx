import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
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
          path="/user/:userId"
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
