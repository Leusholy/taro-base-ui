import Mock from "mockjs";
import { failResponseWrap, successResponseWrap } from "../util";

export interface MockParams {
  url: string;
  type: string;
  body: string;
}

Mock.mock(new RegExp("/api/user/login"), (params: MockParams) => {
  const { username, password } = JSON.parse(params.body);

  if (!username || !password) {
    return failResponseWrap(400, "用户名或密码不能为空", null);
  }

  if (username === "admin" && password === "admin123") {
    return successResponseWrap({ token: "mock_token" });
  }

  return failResponseWrap(400, "账号或者密码错误", null);
});
