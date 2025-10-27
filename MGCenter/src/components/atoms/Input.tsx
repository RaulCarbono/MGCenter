interface Props {
    placeholder : string;
}


export const Input = ({placeholder} : Props) => {
  return (
    <div>
        <input type="text" placeholder={placeholder} />
    </div>
  )
}
