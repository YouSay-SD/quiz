import styles from './QuestionResult.module.scss'
import { FC } from 'react'
import { P, Title } from '../../atoms'
import { QuestionResultProps } from './interface'

const QuestionResult: FC<QuestionResultProps> = ({ question, result }) => {
  return (
    <div className={styles['question-result']}>
      <Title as="h3" size="sm" className={styles.title}>
        {question.title}
      </Title>

      <div className={styles.options}>
        {question.options?.map(({ option, isCorrect }, index) => (
          <div
            key={index}
            className={`${styles.option} ${
              option === result.choice ? styles.selected : null
            } ${isCorrect ? styles.active : null} `}
          >
            <P size="sm">{option}</P>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionResult
