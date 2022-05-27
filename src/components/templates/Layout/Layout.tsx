import { FC } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { LayoutProps } from './interface'

const Layout: FC<LayoutProps> = ({ children }) => {
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
        <main>{children}</main>
      </motion.div>
    </MotionConfig>
  )
}

export default Layout
