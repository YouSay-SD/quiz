import styles from './Menu.module.scss'
import { FC } from 'react'
import { Button } from 'antd'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { Container } from '../../atoms'

const Menu: FC = () => {
  return (
    <header className={styles.menu}>
      <Container className={styles.container}>
        <Link href="/">
          <a className={styles.btn} href="/">
            <Button type="primary" htmlType="submit">
              Home | All Questionaries
            </Button>
          </a>
        </Link>

        <Link href="/create">
          <a className={styles.btn} href="/create">
            <Button type="primary" htmlType="submit">
              Create Questionary
            </Button>
          </a>
        </Link>

        <Link href="/me">
          <a className={styles.btn} href="/me">
            <Button type="primary" htmlType="submit">
              My Questionaries
            </Button>
          </a>
        </Link>

        <Button
          className={`${styles.btn} ${styles['btn-logout']}`}
          type="default"
          htmlType="submit"
          onClick={() => signOut()}
        >
          Log Out
        </Button>
      </Container>
    </header>
  )
}

export default Menu
