/**
 * Created by 51375 on 2017/07/08
 */

import tem from './test.html';
import testCtrl from './test';
import './test.less'


export default angular.module('test', [])
    .component('test', {
        testlate: tem,
        controller: testCtrl,
        controllerAs: 'ctrl'
    })
    .name;