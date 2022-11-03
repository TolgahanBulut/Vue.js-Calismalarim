<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>

        

        <button class="btn btn-primary" @click="show = !show">Butonu Göster/Gizle</button>
         <br><br>
         <transition name="fade">
            <div class="alert alert-success" v-show="show">Bu bir alert Kutusudur</div>
         </transition>
<br><br> 
            <!-- appear sayfa yenilendiğinde animasyonu çalıştırır -->
         <transition name="slide" type="animation" appear>
            <div class="alert alert-danger " v-if="show">Bu bir alert Kutusudur</div>
         </transition>


         <transition 
         enter-class=""    enter-active-class="animated animate__pulse"         leave-class=""
         leave-active-class=" animated animate__heartBeat"
         appear>
            <div class="alert alert-danger " v-if="show">Bu bir alert Kutusudur</div>
         </transition>

  
       
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show : false
    }
  },
  methods : {
    beforeEnter(el){
      console.log("beforeEnter")
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done){
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + "px";
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      }, 50);
    },
    afterEnter(el){
      console.log("afterEnter")
    },
    afterEnterCancelled(el){
      console.log("afterEnterCancelled")

    },
    beforeLeave(el){
      console.log("beforeLeave")
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px"
    },
    leave(el, done){
      console.log("leave")
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + "px";
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      }, 50);

    },
    afterLeave(el){
      console.log("afterLeave")

    },
    afterLeaveCancelled(el){
      console.log("afterLeaveCancelled")

    }

    }
  }
</script>

<style>

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
 transition: 1s;
}

.fade-leave{
opacity: 1;
}
.fade-leave-active{
  transition: 1s;
  opacity: 0;
}

.slide-enter{
  opacity: 0;

}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: 1s;
}
.slide-leave{
opacity: 1;
}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: 3s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(30px);
  }
}

</style>
