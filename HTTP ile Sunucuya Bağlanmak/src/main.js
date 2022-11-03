import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-vue-resource-e96da-default-rtdb.firebaseio.com' ;

// POST ile gönderirken PUT'a çevirir ve verileri değiştirir.

// Vue.http.interceptors.push((request,next)=> {
//   if(request.methods == "POST"){
//     request.method = "PUT"
//   }
//   next();
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
