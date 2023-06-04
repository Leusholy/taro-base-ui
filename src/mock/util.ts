export const failResponseWrap = (code: number, msg: string, data: unknown) => {
  return { code, msg, data };
};

export const successResponseWrap = (data: unknown) => {
  return { code: 200, msg: "请求成功", data };
};
