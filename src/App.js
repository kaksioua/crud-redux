import { Routes, Route } from 'react-router-dom'
import UserList from './feature/users/UserList'
import Adduser from './feature/users/Adduser'
import EditeUser from './feature/users/EditeUser'
function App() {
  return (
    <div className="App container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        Crud with redux
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<Adduser />} />
        <Route path="/edit-user/:id" element={<EditeUser />} />
      </Routes>
    </div>
  )
}

export default App
