import { FC } from 'react'
import styles from './LoginForm.module.scss'
import 'antd/dist/antd.css'
import { Button, Form, Input } from 'antd'
import Link from 'next/link'
import { login } from '../../../services/vivatranslate'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const LoginForm: FC = () => {
  const router = useRouter()

  const onFinish = async ({ email, password }) => {
    const response = await login({
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
      })
      .catch((err) => {
        console.error('Failed to register: ' + err.toString())
      })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <section className={styles['login-form']}>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
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
          >
            Login
          </Button>

          <Link href="/register">
            <a href="/register">
              <Button type="primary" htmlType="submit">
                Or Register
              </Button>
            </a>
          </Link>
        </Form.Item>
      </Form>
    </section>
  )
}

export default LoginForm
