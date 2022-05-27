import styles from './DynamicForm.module.scss'
import 'antd/dist/antd.css'
import { FC } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space, Switch } from 'antd'
import { DynamicFormProps } from './interface'
import { createQuestionary } from '../../../services/vivatranslate'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const DynamicForm: FC<DynamicFormProps> = ({ initValue, operation }) => {
  const { data: session } = useSession()
  const router = useRouter()

  const onFinish = async (values) => {
    console.log('Received values of form:', values)

    if (operation === 'create') {
      try {
        const questionaryToSend = {
          title: values.questionaryTitle,
          questions: values.questionary,
        }
        await createQuestionary(questionaryToSend, session.accessToken)

        router.push('/')
      } catch (err) {
        return null
      }
    }

    // if (operation === 'edit') {
    //   try {
    //     createQuestionary( , session.accessToken)
    //   } catch {

    //   }
    // }
  }

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      initialValues={{ questionary: initValue ?? null }}
      autoComplete="off"
    >
      <Form.Item
        className={styles['questionary-title']}
        name={['questionaryTitle']}
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
              <>
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
              </>
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default DynamicForm
