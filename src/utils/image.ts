import {IMAGE_BASE_URL} from './constants';

export const getImage = (path?: string | null) => {
  if (!path) {
    return 'https://via.placeholder.com/500x750?text=No+Image';
  }

  return `${IMAGE_BASE_URL}${path}`;
};