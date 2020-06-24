import React from "react"
import { getUser } from "../services/auth"

export default function Profile() {
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getUser().name}</li>
        <li>E-mail: {getUser().email}</li>
      </ul>
    </>
  )
}
