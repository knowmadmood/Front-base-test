interface Props {
  hasGuessed: boolean;
  isWinner: boolean;
}

const GameStatus = ({ hasGuessed, isWinner }: Props) => {
  if (hasGuessed && !isWinner)
    return (
      <div className="p-4 text-red-700 bg-red-300 border border-red-900" data-testid='failed-text'>
        Nope. Sorry.
      </div>
    );

  if (hasGuessed && isWinner)
    return (
      <div className="p-4 text-green-700 bg-green-300 border border-green-900" data-testid='successful-text'>
        Wow, you actually won.
      </div>
    );

  return (
    <div className="p-4 border border-cyan-700 bg-cyan-300 text-cyan-900" data-testid='default-text'>
      Try and guess, I guess.
    </div>
  );
};

export default GameStatus;
