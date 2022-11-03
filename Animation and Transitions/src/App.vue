<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>

        <!-- <select class="form-control" v-model="activeEffect" >
        <option value="fade" >Fade</option>
        <option value="slide">Slide</option>
      </select>

         <br><br>
        <button class="btn btn-primary" @click="show = !show">Butonu Göster/Gizle</button>
         <br><br> -->
         <!-- <transition :name="activeEffect">
            <div class="alert alert-success" v-show="show">Bu bir alert Kutusudur</div>
         </transition> -->
<br><br> 
            <!-- appear sayfa yenilendiğinde animasyonu çalıştırır -->
         <!-- <transition name="slide" type="animation" appear>
            <div class="alert alert-danger " v-if="show">Bu bir alert Kutusudur</div>
         </transition>


         <transition 
         enter-class=""    enter-active-class="animated animate__pulse"         leave-class=""
         leave-active-class=" animated animate__heartBeat"
         appear>
            <div class="alert alert-danger " v-if="show">Bu bir alert Kutusudur</div>
         </transition> -->

         <hr>
         <!-- <transition name="fade" mode="out-in">
            <div class="alert alert-success" v-if="show" key="success">Bu bir alert Kutusudur</div>
            <div class="alert alert-info" v-else key="info">Bu bir alert Kutusudur</div>
         </transition> -->

         <!-- <button class="btn btn-primary" @click="showJs = !showJs">Butonu Göster/Gizle</button>
  
          <transition
          :css="false"
          @before-enter ="beforeEnter()"
          @enter="enter()"
          @after-enter="afterEnter()"
          @after-enter-cancelled="afterEnterCancelled()"
          @before-leave="beforeLeave()"
          @leave="leave()"
          @after-leave="afterLeave()"
          @after-leave-cancelled="afterLeaveCancelled()"

          >
            <div  style="width : 300px; background-color : #fbbd08; border : 1px solid #666; width: 100px; height: 100px; " v-if="showJs">Bu bir alert Kutusudur</div>
         </transition> -->

         <hr>

         <!-- <h3>Dinamik Componentler Arası Geçiş..</h3>
<br>

         <button @click="activeComp = 'appPost' " class="btn btn-danger">Post</button>
         <button @click="activeComp = 'appHome' " class="btn btn-info">Home</button>
    
         <transition name="slide" mode="out-in">

          <component :is='activeComp'></component>
         
         </transition> -->

         <br><br>

         <button @click="addNumber" class="btn btn-danger">Yeni Number Ekle</button>
         <br><br>
         <ul class="list-group">
          <transition-group name="fade">
            <li :key="index" @click="removeNumber(index)" v-for="(number , index) in numberList" class="list-group-item">Number : {{number}}</li>
          </transition-group>
         </ul>
        
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import Post from './components/Post'
export default {
  components : {
    appHome : Home,
    appPost : Post
  },
  data(){
    return {
      show : false,
      activeEffect : 'fade',
      showJs : false,
      elementWidth : 100,
      activeComp : "appHome",
      numberList : [1,2,3,4,5]
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

    },
    addNumber () {  
     const position = Math.floor(Math.random() * this.numberList.length)
     this.numberList.splice(position,0,this.numberList.length + 1);

    },
    removeNumber(index){
      this.numberList.splice(index,1);
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
  transition: 0.5s;
}
.slide-leave{
opacity: 1;
}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: 1s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
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
