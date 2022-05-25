import styles from './P.module.scss'
import { FC } from 'react'
import { PProps } from './interface'

const P: FC<PProps> = ({ children, className = '', size = 'md' }) => {
  return (
    <p className={`${styles.p} ${styles[size]} ${className}`}>{children}</p>
  )
}

export default P
