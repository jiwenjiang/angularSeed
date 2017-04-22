routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('regist', {
            url: '/regist',
            template: '<register></register>'
        })
        .state('home', {
            url: '/home',
            template: '<home></home>'
        })
        .state('home.about', {
            url: '/about',
            template: '<about></about>'
        })
}