export const API_URL = import.meta.env.VITE_BASE_URL;

export const API_PATHS = {
  DATA_PLANTS: `${API_URL}${import.meta.env.VITE_API_PATH_PLANTS}`,
  LOGIN: `${API_URL}${import.meta.env.VITE_API_PATH_LOGIN}`,
  SIGNUP: `${API_URL}${import.meta.env.VITE_API_PATH_SIGNUP}`,
};