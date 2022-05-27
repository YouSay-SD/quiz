import { NextPage, GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { Hero, Questionnaires } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'
import { getMyQuestionaries } from '../services/vivatranslate'

const MePage: NextPage = ({ questionaries }: any) => {
  return (
    <>
      <HeadSeo title="Quiz | My Questionaries" />

      <Layout>
        <Hero title="My Questionaries" />
        <Questionnaires questionnaires={questionaries} showButtons={true} />
      </Layout>
    </>
  )
}

export default MePage

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  const getMyDataQuestionaries = async () => {
    try {
      const resp = await getMyQuestionaries(session?.accessToken)
      return {
        resp,
      }
    } catch (err) {
      return null
    }
  }

  const dataQuestionaries = await getMyDataQuestionaries()

  // Redirect to Login
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  // Redirect to Home
  if (!dataQuestionaries) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      questionaries: dataQuestionaries.resp.data,
    },
  }
}
