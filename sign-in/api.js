async function SignUpAPI() {
  // 회원가입 API
  const url =
    'https://counseling-ctq.com/users'
  const response = await fetch(url, {method: 'POST',})

  const data = await response.json()
  return data
}

async function LoginAPI() {
  // 로그인 API
  const url =
    'https://counseling-ctq.com/login'
  const response = await fetch(url, {method: 'POST',})

  const data = await response.json()
  return data
}
