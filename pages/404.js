import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/router"

const Error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])

  return (
    <div className='not-found'>
      <h1>Ooooops...</h1>
      <h2>The requested cannot be found</h2>
      <p>
        Go back <Link href='/'>home</Link>
      </p>
    </div>
  )
}

export default Error
