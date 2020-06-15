import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact" />
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  )
}
