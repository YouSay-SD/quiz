import styles from './QuestionaryCard.module.scss'
import { FC } from 'react'
import { QuestionaryCardProps } from './interface'
import Link from 'next/link'

const QuestionaryCard: FC<QuestionaryCardProps> = ({ title, id }) => {
  return (
    <div className={styles['questionary-card']}>
      <Link href={`/questionary/${id}`} passHref>
        <a href={`/questionary/${id}`}>{title}</a>
      </Link>
    </div>
  )
}

export default QuestionaryCard
