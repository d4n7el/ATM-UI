export interface UserPost {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
}

export interface UserResponse {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserCountAccountResponse {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  accountCount: number;
}
