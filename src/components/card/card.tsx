type CardProps = {
  children?: any
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white p-3 rounded-md ${className}`}>{children}</div>
  )
}
