import { render, screen } from '@testing-library/react';
import Card from './Card';

const inputData = {
  name: 'Little Monster',
  thumbnail: {
    path: 'chromatica',
    extension: 'album'
  }
};

test('should render component correctly', () => {
  render(<Card item={inputData} />);

  expect(screen.getByText(inputData.name)).toBeInTheDocument();
  expect(screen.getByAltText(inputData.name)).toBeInTheDocument();
});
