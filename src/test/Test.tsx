type Props = {
  name: string;
};

export const Test = ({ name }: Props) => {
  // ta reuła lint ominie var
  // eslint-disable-next-line no-var

  var a = 10;

  return <div>{name}</div>;
};
