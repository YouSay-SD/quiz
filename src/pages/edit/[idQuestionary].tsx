import { NextPage } from 'next'
import { EditQuestionary, Hero } from '../../components/organisms'
import { HeadSeo, Layout } from '../../components/templates'

const Create: NextPage = () => {
  return (
    <>
      <HeadSeo title="Quiz | Edit" />

      <Layout>
        <Hero title="Edit your Quiz!" />
        <EditQuestionary />
      </Layout>
    </>
  )
}

export default Create
