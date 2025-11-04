import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"
import { Title } from "../atoms/Title"
import { InputPasswordIcon } from "../molecules/InputPasswordIcon"

interface Props {
  className: string, 
  title : string,
  classNameTitle: string,
  ClassNameButton: string
}


export const Card = () => {
  return (
    <div className="bg-blue-950 text-amber-50 w-96 h-80 rounded-sm  gap-2 grid place-content-center">
        <Title className="text-xl font-bold" text="Sign in"/>
        <Input className="w-48 h-10 text-center rounded-xl border-2 border-amber-100" placeholder="Ingresa tu usuario"/>
        <InputPasswordIcon />
        <Button className="bg-blue-600 rounded-xl w-48 h-10 text-black text-center place-content-center" text="Ingresar" />
    </div>
  )
}
