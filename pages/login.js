const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    setMessage(error.message)
  } else {
    router.push('/dashboard') // 登录后跳转
  }
}
