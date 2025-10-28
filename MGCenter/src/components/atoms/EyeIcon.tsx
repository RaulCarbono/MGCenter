import { Eye, EyeOff } from "lucide-react";

export const EyeIcon = ({ isVisible = true }) => {
  const Icon = isVisible ? EyeOff : Eye;
  return (
    <Icon
      size={20}
      className="absolute right-3 -top-1/48 translate-y-1/2 text-gray-500 cursor-pointer"
    />
  );
};
