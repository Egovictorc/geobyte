import React from 'react'
import { Link } from "react-router-dom"
import {  Helmet } from "react-helmet";

import AuthLayout from '../../layouts/auth/AuthLayout'
import { SectionHeading } from '../../components/headings'
import { SignupForm } from '../../sections/auth/signup'

import { PATH_PAGE } from '../../routes/paths'

const RegisterPage = () => {
  return (
    <AuthLayout>
      <Helmet>
        <title>
          Signup | Geobyte-Logistics
        </title>
      </Helmet>

        <div className={"text-slate-800 "}>
                <SectionHeading title={"Create Account"} className='mb-10' />
            </div>
            <SignupForm/>
            <p className={"py-4 text-center text-sm"}>
                Already have an account? <Link to={PATH_PAGE.login} className={"text-secondary-main underline"}>Login
                now</Link>
            </p>
    </AuthLayout>
  )
}

export default RegisterPage