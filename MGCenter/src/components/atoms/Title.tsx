interface Props {
  text: string;
  className: string;
}

export const Title = ({ text, className }: Props) => {
  return (
 
      <h2 className={className}>{text}</h2>
  
  );
};
