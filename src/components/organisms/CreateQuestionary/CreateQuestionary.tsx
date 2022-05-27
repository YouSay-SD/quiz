import styles from './CreateQuestionary.module.scss'
import { FC } from 'react'
import { Container } from '../../atoms'
import { DynamicForm } from '../../molecules'

const CreateQuestionary: FC = () => {
  return (
    <section className={styles['create-questionary']}>
      <Container>
        <DynamicForm operation="create" />
      </Container>
    </section>
  )
}

export default CreateQuestionary
