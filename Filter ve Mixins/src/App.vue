<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- <h3>Filter ve Mixins</h3>
        <p>{{message}}</p>
        <p>{{message | toUpperCase}}</p>
        <p>{{message | lowercase}}</p>
        <p>{{message | toUpperCase | lowercase}}</p>
          -->
          <app-filter></app-filter>
        <hr> 

        <input type="text" v-model="searchText">

        <ul>
          <li v-for="product in filtered">
            {{product}}
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>

import FilterList from './FilterList'
import { productMixin } from './ProductsMixin';

export default {
  mixins : [productMixin],
  components : {
    appFilter : FilterList 
  },
  data(){
    return {
      message : 'Merhaba Tolgahan Bulut',
      searchText : ''
    }
  },
  filters : {
    toUpperCase(value){
      return  value.toUpperCase()
      
    }
  },
  
}
</script>

<style>

</style>
