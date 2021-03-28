import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Favorite from './Favorite';

const inputData = {
  favorite_image: 'image',
  favorite_name: 'chromatica',
  id_user: 1,
  favorite_id: '1',
  id: 1
};

test('should render component correctly', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Favorite data={{...inputData, type: 'comics'}} /></Router>);

  expect(screen.getByRole('button', {name: 'Desfavoritar'})).toBeInTheDocument();

  expect(screen.getByText('chromatica')).toBeInTheDocument();
  expect(screen.getByAltText('chromatica')).toBeInTheDocument();
});
