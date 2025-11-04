import { Icon } from "../atoms/Icon";
import { Title } from "../atoms/Title";

interface Props {
  title: string;
  className: string;
}

export const CardHeader = ({ title, className }: Props) => {
  return (
    <div className="flex w-full p-2 justify-around">
      <Title text={title} className={className} />
      <div className="bg-emerald-400 rounded-sm p-0.5">
        <Icon color="green" size={24} name="gestion" />
      </div>
    </div>
  );
};
