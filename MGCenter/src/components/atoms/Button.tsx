interface Props {
  text : string;
  className: string;
}
export const Button = ({text, className} : Props) => {
  return (
    <button className={className}>{text}</button>
  )
}
