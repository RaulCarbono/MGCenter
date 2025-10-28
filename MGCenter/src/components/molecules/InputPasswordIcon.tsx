import { EyeIcon } from "../atoms/EyeIcon";
import { Input } from "../atoms/Input";

export const InputPasswordIcon = () => {
  return (
    <div className="relative ">
      <Input className="w-48 h-10 text-center rounded-xl border-2 border-amber-100 focus:outline-none " placeholder="Password"/>
      <EyeIcon />
    </div>
  );
};
