import axios from 'axios';
import {
  login,
  createUser,
  getUserProfile,
  updateUserProfile,
  getMarvelData,
  getMarvelDataByID,
  createFavorite,
  getFavorites,
  removeFavorite,
  baseUrl
} from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Client test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Login function', () => {
    it('should return data successfully from login endpoint', async () => {
      const data = {
        data: { token: 'born this way' }
      };

      mockedAxios.post.mockImplementationOnce(() => Promise.resolve(data));

      const loginData = {
        userEmail: 'ale@ale.com',
        password: 'chromatica911'
      };

      const result = login(loginData);

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/login`, {...loginData});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });

  describe('CreateUser function', () => {
    it('should return data successfully from createUser endpoint', async () => {
      const data = {
        data: {
          id: 1,
          userName: 'Alice',
          userEmail: 'alice@wonderland.com'
        }
      };

      mockedAxios.post.mockImplementationOnce(() => Promise.resolve(data));

      const registerData = {
        userEmail: 'alice@wonderland.com',
        userName: 'Alice',
        password: 'chromatica911'
      };

      const result = createUser(registerData);

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/user`, {...registerData});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });

  describe('GetUserProfile function', () => {
    it('should return data successfully from getUserProfile endpoint', async () => {
      const data = {
        result: {
          id: 1,
          userName: 'Alice',
          userEmail: 'alice@wonderland.com'
        }
      };

      mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

      const result = getUserProfile('alice@wonderland.com', 'monsterfame');

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/user?userEmail=alice@wonderland.com`, {'headers': {'token': 'monsterfame'}});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });

  describe('UpdateUserProfile function', () => {
    it('should return data successfully from updateUserProfile endpoint', async () => {
      const data = {
        result: 'Success'
      };

      const updateData = {
        userEmail: 'alice@wonderland.com',
        userName: 'Alice',
        id: 1
      };

      mockedAxios.put.mockImplementationOnce(() => Promise.resolve(data));

      const result = updateUserProfile(updateData, 'monsterfame');

      expect(axios.put).toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledWith(`${baseUrl}/user`, {'headers': {'token': 'monsterfame'}, data: {user: {...updateData}}});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });

  describe('GetMarvelData function', () => {
    it('should return data successfully from getMarvelData endpoint', async () => {
      const data = {
        data: []
      };

      mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

      const result = getMarvelData('comic', 'monsterfame');

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/marvel?searchType=comic`, {'headers': {'token': 'monsterfame'}});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });

  describe('GetMarvelDataByID function', () => {
    it('should return data successfully from getMarvelDataByID endpoint', async () => {
      const data = {
        data: []
      };

      mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

      const result = getMarvelDataByID('venus', 'comic', 'monsterfame');

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/marvel/venus?searchType=comic`, {'headers': {'token': 'monsterfame'}});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });

  describe('CreateFavorite function', () => {
    it('should return data successfully from createFavorite endpoint', async () => {
      const data = {
        data: {
          id: 1,
          userName: 'Alice',
          userEmail: 'alice@wonderland.com'
        }
      };

      mockedAxios.post.mockImplementationOnce(() => Promise.resolve(data));

      const favoriteData = {
        userID: 1,
        favoriteID: '911',
        favoriteType: 'comics'
      };

      const result = createFavorite({ userID: 1, favoriteID: '911', favoriteType: 'comics' });

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/favorite`, {'headers': {'token': ''}, data: { favorite: {...favoriteData}}});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });

  describe('GetFavorites function', () => {
    it('should return data successfully from getFavorites endpoint', async () => {
      const data = {
        data: [
          {
            id: 1,
            userName: 'Alice',
            userEmail: 'alice@wonderland.com'
          }
        ]
      };

      mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

      const result = getFavorites(1);

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/favorite?userID=1`, {'headers': {'token': ''}});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });

  describe('removeFavorite function', () => {
    it('should return data successfully from removeFavorite endpoint', async () => {
      const data = {
        result: 'Success'
      };

      const favoriteData = {
        userID: 1,
        favoriteID: '911'
      };

      mockedAxios.delete.mockImplementationOnce(() => Promise.resolve(data));

      const result = removeFavorite(favoriteData);

      expect(axios.delete).toHaveBeenCalledTimes(1);
      expect(axios.delete).toHaveBeenCalledWith(`${baseUrl}/favorite`, {'headers': {'token': ''}, data: { favorite: {...favoriteData}}});
      result.then(response => expect(response).toStrictEqual(data));
    });
  });
});
