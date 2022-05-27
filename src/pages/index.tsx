import { NextPage, GetServerSideProps } from 'next'
import { Questionnaires } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'
import { getAllQuestionaries } from '../services/vivatranslate'

const IndexPage: NextPage = ({ questionaries }: any) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
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
      questionaries: dataQuestionaries.resp.data,
    },
  }
}
