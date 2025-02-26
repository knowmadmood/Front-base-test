import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import GameStatus from './game-status';

describe('<GameStatus />', () => {
  describe('when hasGuessed is false', () => {
    test('renders default text', () => {
      render(<GameStatus hasGuessed={false} isWinner={false} />);

      expect(screen.getByText('Try and guess, I guess.')).toBeInTheDocument();
    });
  });

  describe('when hasGuessed is true and isWinner is false', () => {
    test('renders sorry text', () => {
      render(<GameStatus hasGuessed={true} isWinner={false} />);

      expect(screen.getByText('Nope. Sorry.')).toBeInTheDocument();
    });
  });

  describe('when hasGuessed is true and isWinner is true', () => {
    test('renders successful text', () => {
      render(<GameStatus hasGuessed={true} isWinner={true} />);

      expect(screen.getByText('Wow, you actually won.')).toBeInTheDocument();
    });
  });
});