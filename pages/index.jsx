import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

// rfce÷
function Home() {
  const { user } = useAuth();

  return (
    <div>
      aaa
    </div>
  )
}

export default Home
