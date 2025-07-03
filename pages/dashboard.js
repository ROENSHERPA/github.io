import { useEffect, useState } from 'react'
import supabase from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')  // 如果没登录，跳回登录页
      } else {
        setUser(session.user)
      }
    }

    checkUser()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">欢迎来到后台</h1>
      {user && (
        <div>
          <p>用户邮箱：{user.email}</p>
        </div>
      )}
    </div>
  )
}
<button
  onClick={async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }}
  className="mt-4 bg-gray-600 text-white px-4 py-2"
>
  登出
</button>
