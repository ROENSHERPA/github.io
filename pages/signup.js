import { useState } from 'react'
import supabase from '../lib/supabaseClient'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    setMessage(error ? error.message : '请检查邮箱以验证')
  }

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">注册</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="邮箱" className="border p-2 mb-2 w-full" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="密码" className="border p-2 mb-2 w-full" />
      <button onClick={handleSignup} className="bg-blue-600 text-white px-4 py-2">注册</button>
      <p>{message}</p>
    </div>
  )
}
