import styles from './EditQuestionary.module.scss'
import { FC } from 'react'
import { Container } from '../../atoms'
import { DynamicForm } from '../../molecules'

const EditQuestionary: FC = () => {
  const initValue = {
    questionary: [
      {
        question: 'pepe',
        options: [
          {
            isCorrect: true,
            option: '111',
          },
          {
            isCorrect: false,
            option: '222',
          },
        ],
      },
      {
        question: 'pepe2222',
        options: [
          {
            isCorrect: true,
            option: '2222222222222222',
          },
          {
            isCorrect: false,
            option: '2222222222222222222asdasdasd',
          },
        ],
      },
    ],
  }

  return (
    <section className={styles['edit-questionary']}>
      <Container>
        <DynamicForm initValue={initValue.questionary} />
      </Container>
    </section>
  )
}

export default EditQuestionary
