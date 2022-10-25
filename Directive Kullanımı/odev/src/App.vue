<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>
      <!-- Soru -->
      <!-- Event'leri dinleyecek v-on gibi çalışan bir Directive geliştiriniz. -->
      <button v-custom-on:click="clicked" class="btn btn-success">Tıkla !!</button>

      <div class="customOn" v-custom-on:mousemove="mouseMove"
      v-custom-on:mouseleave="mouseLeave"></div>
      
    </div>
  </div>
</template>

<script>
export default {
  directives : {
    customOn : {
      bind(el,binding){

        const type = binding.arg;
        const fn = binding.value;

        el.addEventListener(type,fn)
      }
    }
  },
  methods : {
    clicked(){
      alert("Tıklandı")
    },
    mouseMove(){
      console.log("MouseMove");
    },
    mouseLeave(){
      console.log("mouseLeave");
    }
  }
}
</script>

<style>
.customOn {
  width: 100px;
  height: 100px;
  background-color: cyan;
}

</style>
