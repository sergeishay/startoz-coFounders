'use client';

import { useState, useEffect } from "react"
import React from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { useRouter } from "next/navigation"
import Link from 'next/link';
import Image from 'next/image';
const OnBoarding = () => {

  const router = useRouter()
  const { data: session, status } = useSession();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  console.log(session)
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center">
        <h1>Hello {session?.user.name}</h1>
        <h1>Welcome to StartoZ!</h1>
        <p>We Excited to have you here</p>
        <p>We are a platform that operates in 4 hats,

           during the registration process you must choose the right profile for you</p>
      </div>
    </div>
  )
}

export default OnBoarding