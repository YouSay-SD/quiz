import styles from './CreateQuestionary.module.scss'
import 'antd/dist/antd.css'
import { FC } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space, Switch } from 'antd'
import { Container } from '../../atoms'

const CreateQuestionary: FC = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values)
  }

  return (
    <section className={styles['create-questionary']}>
      <Container>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >
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
                        name={[name, 'question']}
                        label="Question Title"
                        rules={[
                          {
                            required: true,
                            message: 'Missing first name',
                          },
                        ]}
                      >
                        <Input placeholder="First Name" />
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
                                name={[name, 'option']}
                                label="Option"
                                rules={[
                                  {
                                    required: true,
                                    message: 'Missing first name',
                                  },
                                ]}
                              >
                                <Input placeholder="First Name" />
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                name={[name, 'isCorrect']}
                                label="Is correct?"
                              >
                                <Switch />
                              </Form.Item>

                              <MinusCircleOutlined
                                onClick={() => remove(name)}
                              />
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
      </Container>
    </section>
  )
}

export default CreateQuestionary
