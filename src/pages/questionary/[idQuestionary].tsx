import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { setQuestionary } from '../../actions/quizActions'
import { Hero, Questionary } from '../../components/organisms'
import { HeadSeo, Layout } from '../../components/templates'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { getQuestionaryById } from '../../services/vivatranslate'
import { getSession } from 'next-auth/react'

const QuestionaryPage: NextPage = ({ questionary }: any) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setQuestionary(questionary))
  }, [dispatch, questionary])

  return (
    <>
      <HeadSeo title={`Quiz | ${questionary.title}`} />

      <Layout>
        <Hero title={questionary.title} />
        <Questionary />
      </Layout>
    </>
  )
}

export default QuestionaryPage

// Server Props
export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req })
  const { idQuestionary } = query

  // Redirect to Login
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const getDataQuestionary = async (id: string) => {
    try {
      const resp = await getQuestionaryById(id)
      return {
        resp,
      }
    } catch (err) {
      return null
    }
  }

  const dataQuestionary = await getDataQuestionary(idQuestionary.toString())

  // Redirect to HomePage
  if (!dataQuestionary) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      questionary: dataQuestionary.resp.data,
    },
  }
}
