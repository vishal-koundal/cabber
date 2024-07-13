'use client'

import Logo from '@/components/shared/Logo'
import React from 'react'
import Form from '../../components/auth/Login'
import Link from 'next/link'

const page = () => {
  return (
    <div className="bg-hero bg-cover bg-auto bg-scroll">
      <div className="flex min-h-[90vh] flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <Logo dark />
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-8 sm:rounded-lg sm:px-12 shadow-drop">
            <h2 className="mb-6 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <Form
              onSubmit={async (values) => {
                // await execute({
                //   variables: { input: values },
                // })
                console.log('values', values)
              }}
            />
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link
                href="/auth/register"
                className="ml-2 font-semibold leading-6 text-brand"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
