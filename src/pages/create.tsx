import { NextPage, GetServerSideProps } from 'next'
import { CreateQuestionary, Hero } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'
import { getSession } from 'next-auth/react'

const Create: NextPage = () => {
  return (
    <>
      <HeadSeo title="Quiz | Create" />

      <Layout>
        <Hero title="Create your Quiz!" />
        <CreateQuestionary />
      </Layout>
    </>
  )
}

export default Create

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  // Redirect to Login
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
