import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/* BOX */}
      <div className='overflow-hidden shadow-2xl  flex flex-col md:flex-row w-full md:h-[70%] lg:w-[60%] 2xl:w-1/2'>
        {/* IMAGE CONTAINER */}
        <div className='relative h-48 w-full md:h-full md:w-1/2'>
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM */}
        <div className='p-10 flex flex-col justify-center gap-6 md:w-1/2 bg-white'>
          <h1 className='font-bold text-2xl xl:text-3xl'>Welcome</h1>
          <p className='text-gray-500 text-sm'>
            Log into your account or create a new one using social buttons
          </p>
          <button className='flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors'>
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className='object-contain'
            />
            <span className='text-sm font-medium'>Sign in with Google</span>
          </button>
          <button className='flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors'>
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className='object-contain'
            />
            <span className='text-sm font-medium'>Sign in with Facebook</span>
          </button>
          <p className='text-sm text-gray-500'>
            Have a problem?{' '}
            <Link className="underline text-gray-700" href="/">Contact Us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage