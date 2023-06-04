import axios from "axios";

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  code: number;
  msg: string;
  data: {
    token: string;
  };
}

export function login(data: LoginData) {
  return axios.post<LoginRes>("/api/user/login", data);
}
