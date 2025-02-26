import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import rgb2hex from 'rgb2hex';
import Application from './application';

describe('<Application />', () => {
  test('renders Application component', () => {
    render(<Application />);

    expect(screen.getByText('Reset Color')).toBeInTheDocument();
  });

  describe('when the color value is correct', () => {
    test('renders the successful message', async () => {
      const user = userEvent.setup();

      render(<Application />);

      const coloredDiv = screen.getByTestId('colored-div');
      const coloredDivStyles = getComputedStyle(coloredDiv);
      const backgroundColorHexValue = rgb2hex(coloredDivStyles.backgroundColor).hex;
      const hexValueWithoutHash = backgroundColorHexValue.slice(1);

      expect(screen.getByTestId('default-text')).toBeInTheDocument();

      await user.type(screen.getByTestId('color-input'), hexValueWithoutHash);
      await user.click(screen.getByTestId('submit-button'));

      expect(screen.queryByTestId('default-text')).toBe(null);
      expect(screen.getByTestId('successful-text')).toBeInTheDocument();
    });
  });

  describe('when the color value is not correct', () => {
    test('renders the failed message', async () => {
      const user = userEvent.setup();

      render(<Application />);

      expect(screen.getByTestId('default-text')).toBeInTheDocument();

      await user.type(screen.getByTestId('color-input'), 'testText');
      await user.click(screen.getByTestId('submit-button'));

      expect(screen.queryByTestId('default-text')).toBe(null);
      expect(screen.getByTestId('failed-text')).toBeInTheDocument();
    });
  });
});