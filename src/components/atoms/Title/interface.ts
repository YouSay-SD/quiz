export interface TitleProps {
  children: JSX.Element | JSX.Element[] | string
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
