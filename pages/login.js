// 类似注册页面，只需替换 signUp 为 signIn
const { error } = await supabase.auth.signInWithPassword({ email, password })
