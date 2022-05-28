import styles from './RegisterForm.module.scss'
import { FC, useState } from 'react'
import { useForm } from 'antd/lib/form/Form'
import { useRouter } from 'next/router'
import { register } from '../../../services/vivatranslate'
import { signIn } from 'next-auth/react'
import 'antd/dist/antd.css'
import { Button, Form, Input, Spin } from 'antd'
import Link from 'next/link'

export const RegisterForm: FC = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [form] = useForm()

  const onFinish = async ({ email, password }) => {
    setIsLoading(true)

    const response = await register({
      email,
      password,
    })

    signIn('credentials', {
      email: response.data.user.email,
      password,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    })
      .then(function (result) {
        router.push(result.url)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.error('Failed to register: ' + err.toString())
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section className={styles['register-form']}>
      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          className={styles['input-container']}
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className={styles['input-container']}
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className={styles['input-container']}
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                )
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              marginRight: '20px',
            }}
            disabled={isLoading}
          >
            Register
            {isLoading ? <Spin /> : null}
          </Button>

          <Link href="/login">
            <a href="/login">
              <Button type="primary" htmlType="submit">
                Or Login
              </Button>
            </a>
          </Link>
        </Form.Item>
      </Form>
    </section>
  )
}

export default RegisterForm
