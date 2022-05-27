import { NextPage, GetServerSideProps } from 'next'
import { EditQuestionary, Hero, Menu } from '../../components/organisms'
import { HeadSeo, Layout } from '../../components/templates'
import { getSession } from 'next-auth/react'
import { getQuestionaryById } from '../../services/vivatranslate'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useEffect } from 'react'
import { setQuestionary } from '../../actions/quizActions'

const EditPage: NextPage = ({ questionary }: any) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setQuestionary(questionary))
  }, [dispatch, questionary])

  return (
    <>
      <HeadSeo title="Quiz | Edit" />

      <Layout>
        <Menu />
        <Hero title="Edit your Quiz!" />
        <EditQuestionary />
      </Layout>
    </>
  )
}

export default EditPage

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
