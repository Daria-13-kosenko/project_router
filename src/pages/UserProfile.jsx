import { useParams } from 'react-router-dom'

function UserProfile() {
  const { userId } = useParams()
  const users = [
    { id: 1, name: 'Alex', bio: 'Softwere engenier' },
    { id: 2, name: 'Alice', bio: 'Admin' },
    { id: 3, name: 'Max', bio: 'Manager' },
  ]
  const user = users.find((u) => u.id === userId)
  if (!user) return <h2>Пользователь ненайден</h2>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Биография:{user.bio}</p>
    </div>
  )
}
export default UserProfile
