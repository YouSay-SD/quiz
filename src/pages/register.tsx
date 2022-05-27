import { NextPage, GetServerSideProps } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import 'antd/dist/antd.css'
import { Button, Form, Input } from 'antd'
import { Container } from '../components/atoms'
import { HeadSeo, Layout } from '../components/templates'
import { register } from '../services/vivatranslate'
import { useForm } from 'antd/lib/form/Form'
import { Hero } from '../components/organisms'

const Register: NextPage = () => {
  const router = useRouter()
  const [form] = useForm()

  const onFinish = async ({ email, password }) => {
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
      })
      .catch((err) => {
        console.error('Failed to register: ' + err.toString())
      })
  }

  return (
    <>
      <HeadSeo title="Register" />

      <Layout>
        <Hero title="Register" />
        <Container>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
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
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    )
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Container>
      </Layout>
    </>
  )
}

export default Register

// Server Props
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } else {
    return {
      props: {
        register: '',
      },
    }
  }
}
