import { NextPage, GetServerSideProps } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import 'antd/dist/antd.css'
import { Button, Form, Input } from 'antd'
import { Container } from '../components/atoms'
import { HeadSeo, Layout } from '../components/templates'
import { login } from '../services/vivatranslate'
import { Hero } from '../components/organisms'
import Link from 'next/link'

const Register: NextPage = () => {
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
    <>
      <HeadSeo title="Register" />

      <Layout>
        <Hero title="Login" />
        <Container>
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
                Submit
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
