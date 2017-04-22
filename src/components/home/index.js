import angular from 'angular';
import angular_animate from 'angular-animate';
import b_collapse from './collapse'
import template from './template.html';
import style from './home.less';

class HomeController {
    constructor() {
        this.style = style;
        this.isCollapsed = false;
        this.menuItems = [
            {
                name: 'Dashboard',
                value: 'Dashboard'
            }, {
                name: 'Components',
                value: 'Components',
                subMenu: [
                    {
                        name: 'mail'
                    }, {
                        name: 'Timeline'
                    }, {
                        name: 'Tree View'
                    }
                ]
            }, {
                name: 'Charts',
                value: 'Charts',
                subMenu: [
                    {
                        name: 'mail'
                    }, {
                        name: 'Timeline'
                    }, {
                        name: 'Tree View'
                    }
                ]
            }, {
                name: 'UI Features',
                value: 'UIFeatures',
                subMenu: [
                    {
                        name: 'mail'
                    }, {
                        name: 'Timeline'
                    }, {
                        name: 'Tree View'
                    }
                ]
            }
        ];
        this.isShowSidebarBool = false;
        this.isShowSidebar = function () {
            this.isShowSidebarBool = !this.isShowSidebarBool;
        };
        this.setShowSidebar = function (event) {
            if (!this.isShowSidebarBool) {
                this.isShowSidebarBool = true;
                console.log(this.isShowSidebarBool);
            }
            event.cancelBubble = true;
        };
        
    }
}

export default angular.module('sass.home', [angular_animate, b_collapse])
    .component('home', {
        template: template,
        controller: HomeController,
        controllerAs: 'homeCtrl'

    })
    .name;