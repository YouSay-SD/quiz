import { NextPage } from 'next'
import { Questionnaires } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'
import { questionnaires } from '../data/data'

const IndexPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Quiz" />

      <Layout>
        <Questionnaires questionnaires={questionnaires} />
      </Layout>
    </>
  )
}

export default IndexPage
