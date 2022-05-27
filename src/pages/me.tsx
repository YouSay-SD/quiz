import { NextPage, GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { Hero, Menu, Questionnaires } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'
import { useAppSelector } from '../hooks/useAppSelector'
import { getMyQuestionaries } from '../services/vivatranslate'
import { useEffect } from 'react'
import { setMyQuestionaries } from '../actions/quizActions'
import { useAppDispatch } from '../hooks/useAppDispatch'

const MePage: NextPage = ({ questionaries }: any) => {
  const dispatch = useAppDispatch()
  const { myQuestionaries } = useAppSelector((store) => store.quiz)

  useEffect(() => {
    dispatch(setMyQuestionaries(questionaries))
  }, [dispatch, questionaries])

  return (
    <>
      <HeadSeo title="Quiz | My Questionaries" />

      <Layout>
        <Menu />
        <Hero title="My Questionaries" />
        <Questionnaires questionnaires={myQuestionaries} showButtons={true} />
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
        destination: '/login',
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
