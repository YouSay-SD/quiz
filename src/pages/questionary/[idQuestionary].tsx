import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { setQuestionary } from '../../actions/quizActions'
import { Hero, Questionary } from '../../components/organisms'
import { HeadSeo, Layout } from '../../components/templates'
import { questionnaires } from '../../data/data'
import { useAppDispatch } from '../../hooks/useAppDispatch'

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
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { idQuestionary } = query
  const dataQuestionary = questionnaires.find(({ id }) => id == idQuestionary)

  // const getDataQuestionary = async () => {
  //   try {
  //     const resp = await getQuestionary(idQuestionary)
  //     return {
  //       resp,
  //     }
  //   } catch (err) {
  //     return null
  //   }
  // }

  // const dataQuestionary = await getDataQuestionary()

  // // Redirect to HomePage
  // if (!dataQuestionary) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      // questionary: dataQuestionary.resp.data,
      questionary: dataQuestionary,
    },
  }
}
