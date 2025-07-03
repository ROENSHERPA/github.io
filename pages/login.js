// 类似注册页面，只需替换 signUp 为 signIn
const { error } = await supabase.auth.signInWithPassword({ email, password })
const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    setMessage(error.message)
  } else {
    router.push('/dashboard') // 登录后跳转
  }
}
