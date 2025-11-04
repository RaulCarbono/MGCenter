import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};
