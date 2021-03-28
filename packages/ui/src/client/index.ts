import axios from 'axios';
import { getToken } from './auth';

export const baseUrl = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: baseUrl
});

api.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.token = token;
  }

  return config;
});

type UserLogin = {
  userEmail: string;
  password: string;
}

export const login = async ({userEmail, password}: UserLogin) => {
  return await api.post(`${baseUrl}/login`, {userEmail, password});
};

type UserRegister = UserLogin & {
  userName: string;
}

export const createUser = async ({userName, userEmail, password}: UserRegister) => {
  return await api.post(`${baseUrl}/user`, {userName, userEmail, password});
};

export const getUserProfile = async (userEmail: string) => {
  return await api.get(`${baseUrl}/user?userEmail=${userEmail}`);
};

type UserProfile = {
  userName: string;
  userEmail: string;
  id: number;
};

export const updateUserProfile = async ({userName, userEmail, id}: UserProfile) => {
  return await api.put(`${baseUrl}/user`, { data: {user: { userName, userEmail, id }} });
};

export const getMarvelData = async (term: string) => {
  return api.get(`${baseUrl}/marvel?searchType=${term}`);
};

export const getMarvelDataByID = async (itemID: string, term: string) => {
  return await api.get(`${baseUrl}/marvel/${itemID}?searchType=${term}`);
};

type Favorite = {
  userID: number;
  favoriteID: string;
  favoriteType: 'characters' | 'comics';
};

export const createFavorite = async ({userID, favoriteID, favoriteType}: Favorite) => {
  return await api.post(`${baseUrl}/favorite`, {
    data: { favorite: { userID, favoriteID, favoriteType } }
  });
};

export const getFavorites = async (userID: number) => {
  return await api.get(`${baseUrl}/favorite?userID=${userID}`);
};

export const removeFavorite = async ({userID, favoriteID}: Omit<Favorite, 'favoriteType'>) => {
  return api.delete(`${baseUrl}/favorite`, {
    data: { favorite: { userID, favoriteID } }
  });
};
