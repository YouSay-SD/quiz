/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './Questionary.module.scss'
import 'antd/dist/antd.css'
import { FC, useState, useEffect } from 'react'
import { Steps } from 'antd'
import { Container, P, Title } from '../../atoms'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { setMyChoice } from '../../../actions/quizActions'
const { Step } = Steps

const Questionary: FC = () => {
  const { questionary } = useAppSelector((state) => state.quiz)
  const dispatch = useAppDispatch()
  const [current, setCurrent] = useState(0)
  const [value, setValue] = useState([])
  const router = useRouter()
  const currentQuestion = questionary?.questions[current]
  const questionaryQuantity = questionary?.questions.length

  const next = () => {
    setCurrent(current + 1)
  }

  const goToResult = () => {
    router.push({
      pathname: `/result`,
    })
  }

  const handleClick = (option) => {
    setValue([
      ...value,
      {
        question: currentQuestion?.title,
        choice: option,
      },
    ])

    if (current + 1 === questionaryQuantity) {
      goToResult()
    } else {
      next()
    }
  }

  useEffect(() => {
    if (current + 1 === questionaryQuantity) {
      dispatch(setMyChoice(value))
    }
  }, [current, dispatch, questionaryQuantity, value])

  return (
    <section>
      <Container>
        <Steps current={current} className={styles.steps}>
          {questionary?.questions.map((question, index) => (
            <Step key={index} />
          ))}
        </Steps>

        <div className={styles.content}>
          <div className={styles['question-title']}>
            <Title as="h2" size="md">
              {currentQuestion?.title}
            </Title>
          </div>

          <div className={styles['question-options']}>
            {currentQuestion?.options.map(({ title }, index) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={index}
                className={styles['option-container']}
                onClick={() => handleClick(title)}
              >
                {/* <Checkbox onChange={onChangeCheckbox} /> */}
                <P size="sm">{title}</P>
              </div>
            ))}
          </div>
        </div>

        <div className="steps-action"></div>
      </Container>
    </section>
  )
}

export default Questionary
