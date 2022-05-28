import { NextPage, GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { Container } from '../components/atoms'
import { HeadSeo, Layout } from '../components/templates'
import { Hero, LoginForm } from '../components/organisms'

const Register: NextPage = () => {
  return (
    <>
      <HeadSeo title="Quiz | Login" />

      <Layout>
        <Hero title="Login" align="center" />
        <Container>
          <LoginForm />
        </Container>
      </Layout>
    </>
  )
}

export default Register

// Server Props
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } else {
    return {
      props: {
        register: '',
      },
    }
  }
}
