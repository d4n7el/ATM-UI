import { UserResponse } from '@models/user';
export type colors = 'primary' | 'success' | 'warning' | 'danger';
export type transactionTypes =
  | 'DEPOSIT'
  | 'WITHDRAWAL'
  | 'TRANSFER'
  | 'TRANSFER / DEPOSIT';

export interface OperationsDetail {
  sourceAccountName: string;
  sourceAccountNum: string;
  targetAccountName: null | string;
  targetAccountNum: null | string;
  finalBalance: number;
  transactionAmount: number;
  previousBalance: number;
  transactionType: transactionTypes;
  sourceAccountId: number;
  targetAccountId: number | null;
  operationId: number;
  createdAt: Date;
  createBy: UserResponse;
}

export interface Deposit {
  sourceAccount: null;
  targetAccount: Account;
  operation: Operation;
}

export interface Withdrawal {
  sourceAccount: Account;
  targetAccount: null;
  operation: Operation;
}

export interface Operation {
  operationId: number;
  sourceAccountId: number;
  targetAccountId: null;
  createByUserId: number;
  transactionType: string;
  createdAt: Date;
  transactionAmount: number;
  previousBalance: number;
  finalBalance: number;
}

export interface Transfer {
  sourceAccount: Account;
  targetAccount: Account;
  operation: Operation;
}

export interface Account {
  accountId: number;
  accountName: string;
  accountNum: string;
  currentBalance: number;
  previousBalance: number;
}
