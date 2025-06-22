type Props = {
  name: string;
};

export const Test = ({ name }: Props) => {
  // ta reuła lint ominie var

  const a: number = 10;

  return (
    <div>
      {name} {a}
    </div>
  );
};
