import { NextPage } from 'next'
import { HeadSeo, Layout } from '../components/templates'

const IndexPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Quiz" />

      <Layout>Layout Here</Layout>
    </>
  )
}

export default IndexPage
