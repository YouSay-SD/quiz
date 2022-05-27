import { FC } from 'react'
import Menu from '../../organisms/Menu/Menu'
import { motion, MotionConfig } from 'framer-motion'

const Layout: FC = ({ children }: any) => {
  return (
    <MotionConfig transition={{ duration: 0.7 }}>
      <motion.div
        animate="layoutAnimate"
        initial="layoutInitial"
        exit="layoutExit"
        variants={{
          layoutInitial: {
            opacity: 0,
            filter: 'blur(10px)',
            transform: 'translateY(-20px)',
          },
          layoutAnimate: {
            opacity: 1,
            filter: 'blur(0px)',
            transform: 'translateY(0px)',
          },
          layoutExit: {
            opacity: 0,
            filter: 'blur(10px)',
            transform: 'translateY(-50px)',
          },
        }}
      >
        <Menu />
        <main>{children}</main>
      </motion.div>
    </MotionConfig>
  )
}

export default Layout
