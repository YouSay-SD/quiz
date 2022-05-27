import React, { FC } from 'react'
import { Button, Menu as MenuAntd } from 'antd'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

const Menu: FC = () => {
  return (
    <div>
      <Button type="primary" htmlType="submit" onClick={() => signOut()}>
        Log Out
      </Button>

      <Link href="/create">
        <a href="/create">
          <Button type="primary" htmlType="submit">
            Create Questionary
          </Button>
        </a>
      </Link>
    </div>
  )
}

export default Menu
