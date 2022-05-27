import styles from './Questionnaires.module.scss'
import { FC } from 'react'
import { Container, QuestionaryCard } from '../../atoms'
import { QuestionnairesProps } from './interface'

const Questionnaires: FC<QuestionnairesProps> = ({ questionnaires }) => {
  return (
    <section className={styles.questionnaires}>
      <Container className={styles.container}>
        {questionnaires.map(({ _id, title }) => (
          <QuestionaryCard key={_id} id={_id} title={title} />
        ))}
      </Container>
    </section>
  )
}

export default Questionnaires
