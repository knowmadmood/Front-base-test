import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Application from './application';

describe('<Application />', () => {
  test('renders Application component', () => {
    render(<Application />);

    expect(screen.getByText('Reset Color')).toBeInTheDocument();
  });
});