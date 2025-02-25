import { ChangeEvent, FormEvent } from 'react';

interface Props {
  onSubmit: (param: FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
  value: string;
  onChange: (param: ChangeEvent<HTMLInputElement>) => void;
}

const GameInput = ({ onSubmit, disabled, value, onChange, }: Props) => {
  return (
    <form
      className="flex items-end"
      onSubmit={onSubmit}
    >
      <label htmlFor="game-input">
        Enter some letters
        <input
          id="game-input"
          type="text"
          maxLength={6}
          pattern="[a-f|A-F|0-9]{6}"
          placeholder="C0FF33"
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      </label>
      <button className="whitespace-nowrap" type="submit" disabled={disabled}>
        Take a Guess
      </button>
    </form>
  );
};

export default GameInput;
