/**
 * Created by ji.wenjiang on 2017/4/21.
 */

class http {
    constructor($http) {
        this.$http = $http;
        this.options = {
            headers: {
                'Content-type': 'application/json;charset=utf-8',
                'accessToken': 2332
            }
        }
    }
    get(data, url, cb) {
        let gets = {method: 'GET', params: data, url: url}
        Object.assign(gets, this.options)
        console.log(gets)
        this.$http(gets).then(function (data) {
            console.log('success');
            cb(data);
        })
    }

    post(data, url, cb) {
        let posts = {method: 'POST', data: data, url: url}
        Object.assign(posts, this.options)
        this.$http(posts).then(function (data) {
            cb(data)
        })
    }
}

http.$inject = ['$http'];

export default angular.module('http', [])
    .service('http', http)
    .name;
