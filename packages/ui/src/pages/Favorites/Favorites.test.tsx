import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import Favorites from './Favorites';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => '{"id":3,"name":"Alejandro","user_email":"ale@alejandro.com"}'),
      setItem: jest.fn(() => null)
    },
    writable: true
  });

  jest.clearAllMocks();
});

const data = {
  data: {
    result: [
      {
        favorite_image: 'image',
        favorite_name: 'chromatica',
        id_user: 1,
        favorite_id: '1',
        id: 1,
        type: 'characters'
      },
      {
        favorite_image: 'image',
        favorite_name: 'monsterfame',
        id_user: 1,
        favorite_id: '2',
        id: 2,
        type: 'comics'
      }
    ]
  }
};


test.skip('should render component correctly', () => {
  mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

  const history = createMemoryHistory();
  render(<Router history={history}><Favorites /></Router>);

  expect(axios.get).toHaveBeenCalledTimes(1);

  expect(screen.getByText('chromatica')).toBeInTheDocument();
  expect(screen.getByText('monsterfame')).toBeInTheDocument();
});
