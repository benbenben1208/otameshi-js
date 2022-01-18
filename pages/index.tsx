import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { NextPage} from 'next'
import { useAuth } from '../hooks/useAuth'

// rfce÷
const Home: NextPage =  () =>  {
  return (
    <div className="flex flex-1 justify-center items-center w-screen flex-col">
      <h1>ReactとNext.jsの練習</h1>
    </div>
  )
}

export default Home;
