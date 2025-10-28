interface Props {
    placeholder?: string;
    className?: string;
}


export const Input = ({placeholder, className} : Props) => {
  return (
        <input className={className} type="text" placeholder={placeholder}/>
  )
}
