import styles from './Hero.module.scss'
import { FC } from 'react'
import { Container, Title } from '../../atoms'
import { HeroProps } from './interface'

const Hero: FC<HeroProps> = ({ title }) => {
  return (
    <section className={styles.hero}>
      <Container>
        <Title as="h1" size="lg">
          {title}
        </Title>
      </Container>
    </section>
  )
}

export default Hero
