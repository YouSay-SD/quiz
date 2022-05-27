import { NextPage } from 'next'
import { HeadSeo, Layout } from '../components/templates'
import { useRouter } from 'next/router'
import { useAppSelector } from '../hooks/useAppSelector'
import { useEffect } from 'react'
import { Hero, MyResult } from '../components/organisms'

const ResultPage: NextPage = () => {
  const { questionary, myChoice } = useAppSelector((state) => state.quiz)
  const router = useRouter()

  useEffect(() => {
    if (!myChoice) {
      router.push('/')
    }
  }, [myChoice, router])

  return (
    <>
      <HeadSeo title="Quiz | Result" />

      <Layout>
        <Hero title="Your Result!" />
        <MyResult questionary={questionary} myChoice={myChoice} />
      </Layout>
    </>
  )
}

export default ResultPage
