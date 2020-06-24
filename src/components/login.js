import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    handleLogin({ username, password })
  }

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/app/profile`)
        }}
      >
        <label>
          Username
          <input
            type="text"
            name="username"
            onChange={event => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </>
  )
}
