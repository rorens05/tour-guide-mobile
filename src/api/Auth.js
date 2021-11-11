import Base from './Base';

export default class Auth extends Base {
  testConnection = () => {
    return this.sendRequest({path: '/api/v1/auth/connection_test'});
  };

  registerUser = async data => {
    return this.sendRequest({
      path: `/api/v1/auth/register`,
      method: 'POST',
      data,
    });
  };

  login = async (data, login_type = '') => {
    return this.sendRequest({
      path: `/api/v1/auth/login`,
      method: 'POST',
      data,
    });
  };

  getProfile = () => {
    return this.sendRequest({path: `/api/v1/auth/profile`});
  };

  sendCode = email => {
    return this.sendRequest({
      path: `/api/v2/auth/forgot_password`,
      method: 'POST',
      data: {email},
    });
  };

  resendCode = email => {
    return this.sendRequest({
      path: `/api/v2/auth/resend_forgot_password_code`,
      method: 'POST',
      data: {email},
    });
  };

  checkCode = code => {
    return this.sendRequest({
      path: `/api/v2/auth/verify_forgot_password_code`,
      method: 'POST',
      data: {
        verification_code: code,
      },
    });
  };

  changePassword = (code, data) => {
    return this.sendRequest({
      path: `/api/v2/auth/change_password`,
      method: 'POST',
      data: {
        code: code,
        password: data,
      },
    });
  };

  resendConfirmation = email => {
    return this.sendRequest({
      path: `/api/v2/auth/resend_confirmation_email`,
      method: 'POST',
      data: {email},
    });
  };
}
