import styles from './DynamicForm.module.scss'
import 'antd/dist/antd.css'
import { FC, useState } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, Spin, Switch } from 'antd'
import { DynamicFormProps } from './interface'
import {
  createQuestionary,
  editQuestionary,
} from '../../../services/vivatranslate'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../../hooks/useAppSelector'

const DynamicForm: FC<DynamicFormProps> = ({ initValue = null, operation }) => {
  const { questionary } = useAppSelector((state) => state.quiz)
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  const onFinish = async (values) => {
    const questionaryToSend = {
      title: values.title,
      questions: values.questionary,
    }

    try {
      setIsLoading(true)

      if (operation === 'create') {
        await createQuestionary(questionaryToSend, session.accessToken)
      }

      if (operation === 'edit') {
        await editQuestionary(
          questionary._id.toString(),
          questionaryToSend,
          session.accessToken
        )
      }
      setIsLoading(false)
      router.push('/')
    } catch (err) {
      return null
    }
  }

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      initialValues={{ ...initValue }}
      autoComplete="off"
    >
      <Form.Item
        className={styles['questionary-title']}
        name={['title']}
        label="Questionary Title"
        rules={[
          {
            required: true,
            message: 'Missing first name',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.List name="questionary">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key}>
                <Space
                  style={{
                    display: 'flex',
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    className={styles['question-title']}
                    name={[name, 'title']}
                    label="Question Title"
                    rules={[
                      {
                        required: true,
                        message: 'Missing first name',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>

                {/* -- OPTIONS -- */}
                <Form.List name={[name, 'options']}>
                  {(fields, { add, remove }) => (
                    <div className={styles['list-options']}>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space
                          key={key}
                          style={{
                            display: 'flex',
                            marginBottom: 8,
                          }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, 'title']}
                            label="Option"
                            rules={[
                              {
                                required: true,
                                message: 'Missing first name',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            valuePropName="checked"
                            name={[name, 'isCorrect']}
                            label="Is correct?"
                          >
                            <Switch />
                          </Form.Item>

                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          size="middle"
                          icon={<PlusOutlined />}
                        >
                          Add option
                        </Button>
                      </Form.Item>
                    </div>
                  )}
                </Form.List>
              </div>
            ))}
            <Form.Item>
              <Button
                type="default"
                size="large"
                className={styles['btn-add-question']}
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add question
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={isLoading}>
          Submit
          {isLoading ? <Spin /> : null}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default DynamicForm
