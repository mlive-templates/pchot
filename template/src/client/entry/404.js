console.log('this is 404 js file!')
import Vue from 'vue'
import App from '../page/404/404'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})