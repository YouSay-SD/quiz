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
        {question.options?.map(({ title, isCorrect }, index) => (
          <div
            key={index}
            className={`${styles.option} ${
              title === result.choice ? styles.selected : null
            } ${isCorrect ? styles.active : null} `}
          >
            <P size="sm">{title}</P>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionResult
