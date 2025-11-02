import React from "react";
import { Icon } from "../atoms/UserIcon";
import { Button } from "../atoms/Button";

export const Sidebar = () => {
  return (
    <aside className="h-lvh w-full bg-blue-950 shadow-lg border-r flex flex-col">
      <nav className="flex flex-col gap-1.5 p-2">
        <div className="flex w-full flex-row gap-1 p-2 hover:bg-blue-300">
        
        <Icon name="dasboard" />  <Button text="Dashboard" className="border-b-2"/>
        
        </div>
        <Icon name="devices" />
        <Icon name="alert" />
      </nav>
    </aside>
  );
};
