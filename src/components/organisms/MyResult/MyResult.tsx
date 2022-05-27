import styles from './MyResult.module.scss'
import { FC } from 'react'
import { Container } from '../../atoms'
import { QuestionResult } from '../../molecules'
import { MyResultProps } from './interface'
import { Button } from 'antd'
import { useRouter } from 'next/router'

const MyResult: FC<MyResultProps> = ({ questionary, myChoice }) => {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return (
    <section>
      <Container>
        <div className={styles.result}>
          {questionary?.questions.map((question, index) => {
            const choice = myChoice.find(
              (choice) => choice.question == question.title
            )

            return (
              <QuestionResult key={index} question={question} result={choice} />
            )
          })}
        </div>

        <Button type="primary" onClick={goToHome}>
          Play another Quiz
        </Button>
      </Container>
    </section>
  )
}

export default MyResult
