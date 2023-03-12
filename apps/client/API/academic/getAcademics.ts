import { backendInstance } from '../api';
import { useQuery } from '@tanstack/react-query';
import { IAcademic } from './types';

const getAcademics = async (): Promise<Array<IAcademic>> => {
  return (await backendInstance.get('/users')).data;
};

export const useGetAcademics = (auth?: string) => {
  return useQuery<Array<IAcademic>, Error>(['academic'], getAcademics);
};
