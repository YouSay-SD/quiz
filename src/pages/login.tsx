import { NextPage } from 'next'
// import { LoginForm } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'

const Login: NextPage = () => {
  return (
    <>
      <HeadSeo title="Quiz" />

      <Layout>{/* <LoginForm /> */}</Layout>
    </>
  )
}

export default Login
