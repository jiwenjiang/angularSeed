/**
 * Created by ji.wenjiang on 2017/4/19.
 */


import tem from './login.html';
import url from '../../config/system.js';

class loginCtrl {
  constructor(http) {
    [this.http, this.name] = [http, 'login'];
  }
  login() {
    this.http.get({userName: 'link', userPassword: '23333'}, url.login, (data) => {
      console.log(data)
    });
  }
}


loginCtrl.$inject = ['http'];
export default angular.module('login', [])
  .component('login', {
    template: tem,
    controller: loginCtrl
  })
  .name;