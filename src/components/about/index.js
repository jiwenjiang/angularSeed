import angular from 'angular';
import template from './template.html';
import './about.less';

class AboutController {
    constructor() {
        this.thead = ['1', '2', '3', '4'];
        this.list = [{
            isSelected: true,
            list: ['a', 'b', 'c', 'd']
        },{
            isSelected: true,
            list: ['a', 'b', 'c', 'd']
        },{
            isSelected: true,
            list: ['a', 'b', 'c', 'd']
        },{
            isSelected: true,
            list: ['a', 'b', 'c', 'd']
        },
        ]
        this.btns = [
            {
                name: 'add',
                class: 'btn btn-info',
                event: function(list) {
                    console.log(list)
                }
            },
            {
                name: 'edit',
                class:'btn btn-success',
                event: function (list) {
                    console.log(list)
                }
            }
        ]
    }
}

export default angular.module('sass.about', [])
    .component('about', {
        template    : template,
        controller  : AboutController
    })
    .name;

AboutController.$inject = [];