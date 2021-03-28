export const TOKEN_KEY = '@marvel-store-token';
export const USER_KEY = '@marvel-store-user';

export const isAuthenticated = (): boolean => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = (): any => localStorage.getItem(TOKEN_KEY);

export const getUser = (): any => localStorage.getItem(USER_KEY);

export const login = (token: string, userData: any) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, userData);
};

/*export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};*/
