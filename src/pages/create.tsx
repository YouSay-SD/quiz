import { NextPage } from 'next'
import { CreateQuestionary, Hero } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'

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
