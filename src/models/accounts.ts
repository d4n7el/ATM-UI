export interface AccountResponse {
  accountId: number;
  userId: number;
  accountName: string;
  accountNum: string;
  currentBalance: number;
  previousBalance: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AccountByUserResponse {
  accounts: Account[];
  user: User;
}

export interface Account {
  accountId: number;
  userId: number;
  accountName: string;
  accountNum: string;
  currentBalance: number;
  previousBalance: number;
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  accountCount: number;
}

export interface AccountWithOutUser {
  accountId: number;
  accountName: string;
  accountNum: string;
  currentBalance: number;
  previousBalance: number;
}
