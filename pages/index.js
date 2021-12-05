import { useContext } from 'react'
import { Context } from '../context'
import { useRouter } from 'next/router'
import axios from 'axios'

// dd8a19d1-ad5a-4bb6-9d54-a5e9f11bcb36

export default function Auth() {

  const { username, setUsername, secret, setSecret } = useContext(Context)
  const router = useRouter()

  const onSubmit = e => {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return

    axios.put(
      `https://api.chatengine.io/users/`, 
      { username, secret },
      { headers: { 'Private-key': 'dd8a19d1-ad5a-4bb6-9d54-a5e9f11bcb36' } }
    ).then(() => {
      router.push('/chats')
    })

    console.log(username, secret)
  }
  
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={onSubmit}>
          <div className="auth-title">NextJS Chat</div>
          
          <div className="input-container">
            <input
              placeholder='Email'
              className='text-input'
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type='password'
              placeholder='Password'
              className='text-input'
              onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button type='submit' className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}