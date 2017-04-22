/**
 * Created by ji.wenjiang on 2017/4/20.
 */


import tem from './register.html';
import '../login/login.less';


class registerCtrl {
    constructor() {
        this.name = 'login';
    }
}

export default angular.module('register', [])
    .component('register', {
        template: tem,
        controller: registerCtrl
    })
    .name;