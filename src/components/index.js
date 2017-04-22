import Home from './home';
import About from './about';
import login from './login';
import register from './register';
import angular from 'angular';

export default angular.module('components', [
    Home,
    About,
    login,
    register
]).name;
