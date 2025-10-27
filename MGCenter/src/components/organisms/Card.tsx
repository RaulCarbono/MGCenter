import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"


export const Card = () => {
  return (
    <div className="w-96 h-80 rounded-sm border-2 gap-2 grid place-content-center">
        <Input placeholder="Ingresa tu usuario"/>
        <Button text="Ingresar" />
    </div>
  )
}
