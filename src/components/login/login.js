/**
 * Created by 51375 on 2017/7/8.
 */
// import url from '../../config/system.js';

class loginCtrl {
    constructor(http) {
        [this.http, this.name] = [http, 'login'];
    }
    login() {
        // this.http.get({userName: 'link', userPassword: '23333'}, url.login, (data) => {
        //     console.log(data)
        // });
        this.showlogin=true;
    }
}
loginCtrl.$inject = ['http'];
export default loginCtrl