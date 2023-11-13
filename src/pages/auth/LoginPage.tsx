import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom";

import AuthLayout from '../../layouts/auth/AuthLayout'
import { SectionHeading } from '../../components/headings'
import { LoginForm } from '../../sections/auth/login'
import { PATH_PAGE } from '../../routes/paths';

import {COMPANY_INFO} from "../../../config-global"


const LoginPage = () => {
  return (
    <AuthLayout>
      <Helmet>
        <title>
          Login | {`${COMPANY_INFO.name}`}
        </title>
      </Helmet>

      <SectionHeading title={"Welcome back"} className='mb-10' />
      <LoginForm />
      <p className={"py-4 text-center text-sm"}>
        Don&apos;t have account? <Link to={PATH_PAGE.signup} className={"text-secondary-darker dark:text-secondary-main underline"}>Create
          now</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage