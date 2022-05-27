/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './Questionary.module.scss'
import 'antd/dist/antd.css'
import { FC, useState, useEffect } from 'react'
import { Button, Checkbox, message, Steps } from 'antd'
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
  console.log('c', currentQuestion)
  const next = () => {
    setCurrent(current + 1)
    console.log('current', current)
    console.log('steps', questionary.questions.length)
  }

  // const prev = () => {
  //   setCurrent(current - 1)
  // }

  const goToResult = () => {
    router.push({
      pathname: `/result`,
    })
  }

  const handleClick = (option) => {
    setValue([
      ...value,
      {
        id: currentQuestion?.id,
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
          {questionary?.questions.map(({ id }) => (
            <Step key={id} />
          ))}
        </Steps>

        <div className={styles.content}>
          <div className={styles['question-title']}>
            <Title as="h2" size="md">
              {currentQuestion?.title}
            </Title>
          </div>

          <div className={styles['question-options']}>
            {currentQuestion?.options.map(({ option }, index) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={index}
                className={styles['option-container']}
                onClick={() => handleClick(option)}
              >
                {/* <Checkbox onChange={onChangeCheckbox} /> */}
                <P size="sm">{option}</P>
              </div>
            ))}
          </div>
        </div>

        <div className="steps-action">
          {/* {current < questionaryQuantity - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )} */}
          {/* {current === questionaryQuantity - 1 && (
            <Button type="primary" onClick={goToResult}>
              Done
            </Button>
          )} */}
          {/* {current > 0 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )} */}
        </div>
      </Container>
    </section>
  )
}

export default Questionary
