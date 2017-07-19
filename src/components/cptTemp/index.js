/**
 * Created by author on time
 */

import tem from './temp.html';
import tempCtrl from './temp';
import './temp.less'


export default angular.module('temp', [])
    .component('temp', {
        template: tem,
        controller: tempCtrl,
        controllerAs: 'ctrl'
    })
    .name;