import { backendInstance } from '../api';
import { useQuery } from '@tanstack/react-query';

const postPodcast = async () => {
  return await backendInstance.post('/podcasts');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['podcast'], postPodcast);
};
