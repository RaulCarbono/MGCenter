import { CircleUserIcon } from "lucide-react";

interface Props {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const UserIcon = ({ color, size, strokeWidth }: Props) => {
  return (
    <div className="grid place-content-center">
        
      <CircleUserIcon color={color} size={size} strokeWidth={strokeWidth} />
    </div>
  );
};
