type Props = {
  name: string;
};

export const Test = ({ name }: Props) => {
  // ta reuła lint ominie var

  const a: string = 'simet amet dupa ';

  return (
    <div>
      {name} {a}
    </div>
  );
};
