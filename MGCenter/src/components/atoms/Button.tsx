interface Props {
  text : string;
}
export const Button = ({text} : Props) => {
  return (
    <>
    <button className="w-48">{text}</button>
    </>
  )
}
