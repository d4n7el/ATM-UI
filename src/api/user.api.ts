import { getRequest, postRequest } from '@api/base.api';
import { AxiosResponse } from 'axios';
import { UserResponse, UserCountAccountResponse } from '@models/user';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const postUser = async (
  data: any
): Promise<AxiosResponse<UserResponse, UserResponse>> => {
  const url = `${BASE_URL}/user`;
  const response = await postRequest(url, data);
  return response;
};

export const getUsers = async (): Promise<
  AxiosResponse<UserCountAccountResponse[], UserCountAccountResponse[]>
> => {
  const url = `${BASE_URL}/users`;
  const response = await getRequest(url);
  return response;
};
