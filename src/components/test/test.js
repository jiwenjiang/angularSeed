/**
 * Created by 51375 on 2017/07/08
 */
import url from '../../config/system.js';

class testCtrl {
    constructor(http) {
        [this.http, this.name] = [http, 'test'];
    }
}
testCtrl.$inject = ['http'];
export default testCtrl