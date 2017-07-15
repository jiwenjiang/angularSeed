/**
 * Created by 51375 on time
 */
import url from '../../config/system.js';

class tempCtrl {
    constructor(http) {
        [this.http, this.name] = [http, 'temp'];
    }
}
tempCtrl.$inject = ['http'];
export default tempCtrl