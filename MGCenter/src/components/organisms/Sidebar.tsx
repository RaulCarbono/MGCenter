import { Icon } from "../atoms/Icon";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";

export const Sidebar = () => {
  return (
    <aside className="h-lvh w-full bg-blue-950 shadow-lg border-r flex flex-col ">
      <div className="flex p-4 w-full justify-center">
        <Title text="SBC Manager" className="flex font-semibold text-2xl gap-1 p-2"/>
      </div>
      <nav className="flex w-full flex-col gap-1.5 ">
        <div className="flex w-full flex-row gap-2 items-center  p-2 hover:bg-blue-300">
          <Icon name="dasboard" />{" "}
          <Button text="Dashboard" className="border-b-2" />
        </div>
        <div className="flex w-full flex-row gap-2 items-center  p-2 hover:bg-blue-300">
        <Icon name="devices" />
        <Button text="Devices" className=""/>
        </div>
        <div className="flex w-full flex-row gap-2 items-center p-2 hover:bg-blue-300">
        <Icon name="alert" />
        <Button text="Alerts" className=""/>
        </div>
      </nav>
    </aside>
  );
};
