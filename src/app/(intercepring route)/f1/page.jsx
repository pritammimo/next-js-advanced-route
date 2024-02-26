import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <Link href="/f1/f2">go to f2</Link>
    <br/>
    <Link href="/login">Login</Link>
    </>
  )
}

export default page