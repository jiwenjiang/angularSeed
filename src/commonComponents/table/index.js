/**
 * Created by admin on 2017/4/20.
 */
import angular from 'angular';
import template from './table.html';
import './table.less';

class TableController {
    constructor() {
    }
    setAll(){
        var isAll = this.isAll;
        angular.forEach(this.data,  function (value) {
            value.isSelected = isAll;
        })
    }
    $onInit() {
        
    }

    $onChanges() {
    }

    $onDestroy() {
    }

    $postLink() {
    }
}

export default angular.module('sass.common', [])
    .component('commonTable', {
        template    : template,
        controller  : TableController,
        bindings: {
            title: '@',
            tHead: '<',
            data: '<',
            isShowCheckbox: '<',
            btns: '<'
        }
    })
    .name;