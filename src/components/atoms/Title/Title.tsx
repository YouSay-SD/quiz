import { FC } from 'react'
import styles from './Title.module.scss'
import { TitleProps } from './interface'

const Title: FC<TitleProps> = ({
  children,
  size = 'md',
  className = '',
  as,
}) => {
  const Htag = as

  return (
    <Htag className={`${styles.title} ${styles[size]} ${className}`}>
      {children}
    </Htag>
  )
}

export default Title
