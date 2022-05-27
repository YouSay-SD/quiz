import styles from './EditQuestionary.module.scss'
import { FC, useState, useEffect } from 'react'
import { Container } from '../../atoms'
import { DynamicForm } from '../../molecules'
import { useAppSelector } from '../../../hooks/useAppSelector'

const EditQuestionary: FC = () => {
  const { questionary } = useAppSelector((state) => state.quiz)
  const [initValue, setInitValue] = useState(null)

  useEffect(() => {
    setInitValue({
      title: questionary?.title,
      questionary: questionary ? [...questionary?.questions] : [],
    })
  }, [questionary])

  return (
    <section className={styles['edit-questionary']}>
      <Container>
        {initValue ? (
          <DynamicForm initValue={initValue} operation="edit" />
        ) : null}
      </Container>
    </section>
  )
}

export default EditQuestionary
