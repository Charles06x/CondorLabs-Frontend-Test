import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'condormarket.auth0.com',
    clientID: 'X0LcXQ2jGpBpgOvERuSFGs7eh3Pp3bBl',
    redirectUri: 'http://localhost:3000/',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}