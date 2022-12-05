<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr><hr>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr><hr>
    <button class="btn btn-success" @click="incAsync({time : 2000})">Async Arttır</button>

  </div>
</template>

<script>
import { mapMutations , mapActions } from 'vuex'
export default {
  // Mutations değer değiştirmel için gönderdiğimiz methodlar
   methods : {
    ...mapMutations([
      'increaseCounter',
      'decreaseCounter'
   ]),
    ...mapActions([
      "increment",
      "decrement",
      "incAsync"
    ])

    // increment({commit}){
    //   this.$store.dispatch("increment")
    // },
    // decrement({commit}){
    //   this.$store.dispatch("decrement")
    // },
    // incAsync({commit}){
    //   this.$store.dispatch("incAsync")
    // }
  //   incrementCounter(){
  //     // this.$emit("counterEvent", 1);
  //     // this.$store.state.counter++;
  //     this.$store.commit('updateCounter', 1)

  //   },
  //   decrementCounter(){
  //     // this.$emit("counterEvent", -1);
  //     // this.$store.state.counter--;
  //     this.$store.commit('updateCounter', -1)
      
     }
  }

</script>

<style>
</style>
