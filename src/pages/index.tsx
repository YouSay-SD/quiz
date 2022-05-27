import { NextPage, GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { Questionnaires } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'
import { getAllQuestionaries } from '../services/vivatranslate'

const IndexPage: NextPage = ({ questionaries }: any) => {
  const { data: session } = useSession()
  console.log('session', session)

  return (
    <>
      <HeadSeo title="Quiz" />

      <Layout>
        <Questionnaires questionnaires={questionaries} />
      </Layout>
    </>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  const getDataQuestionary = async () => {
    try {
      const resp = await getAllQuestionaries()
      return {
        resp,
      }
    } catch (err) {
      return null
    }
  }

  const dataQuestionaries = await getDataQuestionary()

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
    props: {
      questionaries: dataQuestionaries.resp.data,
    },
  }
}
