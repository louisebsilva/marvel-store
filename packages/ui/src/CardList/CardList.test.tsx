import { render, screen } from '@testing-library/react';
import CardList from './CardList';

const inputData = [
  {
    name: 'Little Monster',
    thumbnail: {
      path: 'chromatica',
      extension: 'album'
    }
  },
  {
    name: 'Applause',
    thumbnail: {
      path: 'artpop',
      extension: 'album'
    }
  }
];

test('should render component correctly', () => {
  render(<CardList cardData={inputData} />);

  expect(screen.getByText(inputData[0].name)).toBeInTheDocument();
  expect(screen.getByText(inputData[1].name)).toBeInTheDocument();
});
