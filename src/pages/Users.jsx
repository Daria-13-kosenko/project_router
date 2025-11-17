import { Link } from 'react-router'

function Users() {
  const users = [
    { id: 1, name: 'Alex', bio: 'Softwere engenier' },
    { id: 2, name: 'Alice', bio: 'Admin' },
    { id: 3, name: 'Max', bio: 'Manager' },
  ]

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  )
}
export default Users
