import { NextPage, GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { Hero, Menu, Questionnaires } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'
import { getAllQuestionaries } from '../services/vivatranslate'

const IndexPage: NextPage = ({ questionaries }: any) => {
  return (
    <>
      <HeadSeo title="Quiz" />

      <Layout>
        <Menu />
        <Hero title="Play one of them!" />
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
        destination: '/login',
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
