import axios from 'axios';

export const baseUrl = 'http://localhost:3001/api';

type UserLogin = {
  userEmail: string;
  password: string;
}

export const login = async ({userEmail, password}: UserLogin) => {
  return await axios.post(`${baseUrl}/login`, {userEmail, password});
};

type UserRegister = UserLogin & {
  userName: string;
}

export const createUser = async ({userName, userEmail, password}: UserRegister) => {
  return await axios.post(`${baseUrl}/user`, {userName, userEmail, password});
};

export const getUserProfile = async (userEmail: string, token = '') => {
  return await axios.get(`${baseUrl}/user?userEmail=${userEmail}`, { headers: {'token': token} });
};

type UserProfile = {
  userName: string;
  userEmail: string;
  id: number;
};

export const updateUserProfile = async ({userName, userEmail, id}: UserProfile, token = '') => {
  return await axios.put(`${baseUrl}/user`, { headers: {'token': token}, data: {user: { userName, userEmail, id }} });
};

export const getMarvelData = async (term: string, token = '') => {
  return axios.get(`${baseUrl}/marvel?searchType=${term}`, {headers: {'token': token}});
};

export const getMarvelDataByID = async (itemID: string, term: string, token = '') => {
  return await axios.get(`${baseUrl}/marvel/${itemID}?searchType=${term}`, {headers: {'token': token}});
};

type Favorite = {
  userID: number;
  favoriteID: string;
  favoriteType: 'characters' | 'comics';
};

export const createFavorite = async ({userID, favoriteID, favoriteType}: Favorite, token = '') => {
  return await axios.post(`${baseUrl}/favorite`, {
    headers: {'token': token},
    data: { favorite: { userID, favoriteID, favoriteType } }
  });
};

export const getFavorites = async (userID: number, token = '') => {
  return await axios.get(`${baseUrl}/favorite?userID=${userID}`, {
    headers: {'token': token}
  });
};

export const removeFavorite = async ({userID, favoriteID}: Omit<Favorite, 'favoriteType'>, token = '') => {
  return axios.delete(`${baseUrl}/favorite`, {
    data: { favorite: { userID, favoriteID } },
    headers: {'token': token}
  });
};
