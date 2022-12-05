<template>
  <div>
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> Tıklama : {{ stringC }}</p>
    <hr>
    <input type="text" v-model="value">
    <p>{{ value }}</p>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    // props : ["counter"],
  //   computed : mapGetters([
  //     'getDoubleCounter',
  //     'stringCounter'
  // ])
  // npm install --save babel-plugin-transform-object-rest-spread ve .babelrc dosyasını ekleyip mapGetters problemini çözdüm.

  // 269.dersteki çözümde işe yarıyor.

  // Getters değerleri geçirmek için kullandığımız yol.
    computed : {
      ...mapGetters({
        double : 'getDoubleCounter',
        stringC : 'stringCounter'
      }),
      value : {
        get () {
          return this.$store.getters.getValue;
        },
        set (value) {
          this.$store.dispatch("setValueData",value)
        }
      }
    }
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
