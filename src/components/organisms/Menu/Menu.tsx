import React, { FC } from 'react'
import { Button, Menu as MenuAntd } from 'antd'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

const Menu: FC = () => {
  return (
    <div>
      <Link href="/">
        <a href="/">
          <Button type="primary" htmlType="submit">
            Home | All Questionaries
          </Button>
        </a>
      </Link>

      <Link href="/create">
        <a href="/create">
          <Button type="primary" htmlType="submit">
            Create Questionary
          </Button>
        </a>
      </Link>

      <Link href="/me">
        <a href="/me">
          <Button type="primary" htmlType="submit">
            My Questionaries
          </Button>
        </a>
      </Link>

      <Button type="primary" htmlType="submit" onClick={() => signOut()}>
        Log Out
      </Button>
    </div>
  )
}

export default Menu
