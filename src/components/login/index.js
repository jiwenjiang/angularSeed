/**
 * Created by ji.wenjiang on 2017/4/19.
 */


import tem from './login.html';
import loginCtrl from './login';
import './login.less';


export default angular.module('login', [])
    .component('login', {
        template: tem,
        controller: loginCtrl,
        controllerAs: 'ctrl'
    })
    .name;