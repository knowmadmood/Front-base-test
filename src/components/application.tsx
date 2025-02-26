import { useState, useEffect, FormEvent } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';

const Application = () => {
  const [colorGuess, setColorGuess] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<string>(generateRandomColor());
  const [hasGuessed, setHasGuessed] = useState<boolean>(false);
  const [isWinner, setIsWinner] = useState<boolean>(false);

  useEffect(() => {
    if (hasGuessed) {
      if (correctAnswer.toUpperCase() === colorGuess.toUpperCase()) {
        setIsWinner(true);
      }
    }
  }, [hasGuessed, correctAnswer, colorGuess]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasGuessed(true);
  };

  return (
    <main className="flex flex-col gap-8 mx-auto my-8 w-96">
      <ColorSwatch color={correctAnswer} />
      <GameInput
        value={colorGuess}
        onChange={(e) => setColorGuess(e.target.value)}
        onSubmit={handleSubmit}
        disabled={hasGuessed}
      />
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button
        onClick={() => {
          setCorrectAnswer(generateRandomColor());
          setHasGuessed(false);
          setColorGuess('');
        }}
        type={hasGuessed ? 'submit' : 'button'}
      >
        Reset Color
      </button>
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
