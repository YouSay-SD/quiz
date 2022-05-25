import styles from './Container.module.scss'
import { FC } from 'react'
import { ContainerProps } from './interface'

const Container: FC<ContainerProps> = ({ children, className = '', side }) => {
  return (
    <div className={`${styles.container} ${styles[side]} ${className}`}>
      {children}
    </div>
  )
}

export default Container
