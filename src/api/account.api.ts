import { getRequest, postRequest } from '@api/base.api';
import { AxiosResponse } from 'axios';
import {
  AccountByUserResponse,
  AccountResponse,
  AccountWithOutUser,
} from '@models/accounts';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getAccountsByUser = async (
  accountId: string
): Promise<
  AxiosResponse<AccountByUserResponse, AccountByUserResponse> | undefined
> => {
  const url = `${BASE_URL}/account/user/${accountId}`;
  const response = await getRequest(url);
  return response;
};

export const getAccounts = async (): Promise<
  AxiosResponse<AccountResponse[], AccountResponse[]> | undefined
> => {
  const url = `${BASE_URL}/accounts`;
  const response = await getRequest(url);
  return response;
};

export const postCreateAccount = async (
  data: any
): Promise<
  AxiosResponse<AccountWithOutUser, AccountWithOutUser> | undefined
> => {
  const url = `${BASE_URL}/account`;
  const response = await postRequest(url, data);
  return response;
};
