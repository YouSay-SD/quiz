import { FC } from 'react'
import Menu from '../../organisms/Menu/Menu'

const Layout: FC = ({ children }: any) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  )
}

export default Layout
