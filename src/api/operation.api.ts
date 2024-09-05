import { getRequest, postRequest } from '@api/base.api';
import { AxiosResponse } from 'axios';
import {
  Deposit,
  OperationsDetail,
  Transfer,
  Withdrawal,
} from '@models/operations';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getOperations = async (): Promise<
  AxiosResponse<OperationsDetail[], OperationsDetail[]> | undefined
> => {
  const url = `${BASE_URL}/operations`;
  const response = await getRequest(url);
  return response;
};

export const postDeposit = async (
  data: any
): Promise<AxiosResponse<Deposit, Deposit> | undefined> => {
  const url = `${BASE_URL}/operation`;
  const response = await postRequest(url, data);
  return response;
};

export const postWithdrawal = async (
  data: any
): Promise<AxiosResponse<Withdrawal, Withdrawal> | undefined> => {
  const url = `${BASE_URL}/operation`;
  const response = await postRequest(url, data);
  return response;
};

export const postTransfer = async (
  data: any
): Promise<AxiosResponse<Transfer, Transfer> | undefined> => {
  const url = `${BASE_URL}/operation`;
  const response = await postRequest(url, data);
  return response;
};
