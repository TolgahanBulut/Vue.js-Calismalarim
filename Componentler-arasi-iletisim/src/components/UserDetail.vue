<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı adı : {{name}}</p>
    <p>Kullanıcı adı : {{switchName ()}}</p>
    <p>Kullanıcı Yaşı : {{age}}</p>
    <button @click="childToParent">Parente Gönder</button>
  </div>
</template>
<script>

  import { eventBus } from '../main.js'

  export default {
    props : {
      name : {
        type : [String],
        default : "TolgahanBulut"
      },
      age : Number

    },
    methods : {
      switchName(){
        return this.name.split("").reverse().join("");
      },
      childToParent(){
        this.$emit("data","childgelen")
      }
    },
    created(){
      eventBus.$on("ageWasEdited", (age) => {
        this.age = age;
      })
    }
  }
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
