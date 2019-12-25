import {aseDecode, isValidUsername} from '@/utils/validate';

export default class UserMock {
  public static login(params: { body: string }) {
    const data = JSON.parse(params.body);
    const {requestValue} = data;
    const {username, password} = aseDecode(requestValue);
    if (!isValidUsername(username)) {
      return {
        code: 201,
        message: '用户不存在',
      };
    } else if (username !== password) {
      return {
        code: 202,
        message: '密码不正确',
      };
    } else {
      return {
        code: 200,
        token: '123456',
        message: '登录成功',
      };
    }
  }
}
