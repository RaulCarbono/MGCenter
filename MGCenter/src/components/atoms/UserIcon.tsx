import {
  CircleUserIcon,
  Server,
  LayoutDashboard,
  Cpu,
  MemoryStick,
  HardDrive,
  Activity,
  Box,
  Bell,
  Thermometer,
} from "lucide-react";

interface Props {
  color?: string;
  size?: number;
  strokeWidth?: number;
  name: keyof Icons;
}

interface Icons {
  user: string;
  dasboard: string;
  devices: string;
  cpu: string;
  ram: string;
  server: string;
  alert: string;
  container: string;
  gestion: string;
  thermometer: string;
}

export const Icon = ({ color, size, strokeWidth, name }: Props) => {
  const icons =  {
    user: CircleUserIcon,
    dasboard: LayoutDashboard,
    devices: Server,
    cpu: Cpu,
    ram: MemoryStick,
    server: HardDrive,
    alert: Bell,
    container: Box,
    gestion: Activity,
    thermometer: Thermometer,
  };

  const IconComponent = icons[name] || CircleUserIcon;

  return (
    <div className="grid place-content-center">
      <IconComponent color={color} size={size} strokeWidth={strokeWidth} />
    </div>
  );
};
