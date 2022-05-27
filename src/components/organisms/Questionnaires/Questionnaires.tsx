import styles from './Questionnaires.module.scss'
import { FC } from 'react'
import { Container, QuestionaryCard } from '../../atoms'
import { QuestionnairesProps } from './interface'

const Questionnaires: FC<QuestionnairesProps> = ({ questionnaires }) => {
  return (
    <section className={styles.questionnaires}>
      <Container className={styles.container}>
        {questionnaires.map(({ id, title }) => (
          <QuestionaryCard key={id} id={id} title={title} />
        ))}
      </Container>
    </section>
  )
}

export default Questionnaires
