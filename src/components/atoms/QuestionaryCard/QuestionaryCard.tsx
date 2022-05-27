import styles from './QuestionaryCard.module.scss'
import { FC } from 'react'
import { QuestionaryCardProps } from './interface'
import Link from 'next/link'
import { Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import {
  deleteQuestionaryById,
  getMyQuestionaries,
} from '../../../services/vivatranslate'
import { useSession } from 'next-auth/react'
import { setMyQuestionaries } from '../../../actions/quizActions'
import { useAppDispatch } from '../../../hooks/useAppDispatch'

const QuestionaryCard: FC<QuestionaryCardProps> = ({
  title,
  id,
  showButtons,
}) => {
  const dispatch = useAppDispatch()
  const { data: session } = useSession()
  const route = useRouter()

  const editQuestionary = () => {
    route.push(`/edit/${id}`)
  }

  const deleteQuestionary = async () => {
    try {
      const resp = await deleteQuestionaryById(
        id.toString(),
        session.accessToken
      )

      if (resp) {
        const getMyDataQuestionaries = async () => {
          try {
            const resp = await getMyQuestionaries(session.accessToken)
            return {
              resp,
            }
          } catch (err) {
            return null
          }
        }

        const dataQuestionaries = await getMyDataQuestionaries()
        dispatch(setMyQuestionaries(dataQuestionaries?.resp.data))
      }
    } catch (err) {
      return null
    }
  }

  return (
    <div className={styles['questionary-card']}>
      <Link href={`/questionary/${id}`} passHref>
        <a href={`/questionary/${id}`}>{title}</a>
      </Link>

      {showButtons ? (
        <div className={styles.buttons}>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={editQuestionary}
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={deleteQuestionary}
          />
        </div>
      ) : null}
    </div>
  )
}

export default QuestionaryCard
