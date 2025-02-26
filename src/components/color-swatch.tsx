interface Props {
  color: string;
}

const ColorSwatch = ({ color }: Props) => {
  return (
    <div
      data-testid='colored-div'
      className="h-96 w-96"
      style={{ backgroundColor: '#' + color }}
    />
  );
};

export default ColorSwatch;
