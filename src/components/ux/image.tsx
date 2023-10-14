export function Img({
  className,
  ...props
}: React.HTMLAttributes<HTMLImageElement> & {
  src: string
  width?: number
  height?: number
  alt?: string
}) {
  return <img className={className} {...props} />
}
