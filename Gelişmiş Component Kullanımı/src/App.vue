<template>
  <div class="container">
    <div class="row">
      
      <div class="col-md-6 col-md-offset-3">
        <br>
        <button @click="selectedComponent = 'appMemory'" class="btn btn-success btn-sm">appMemory</button>
      <button @click="selectedComponent = 'appNewMemory'" class="btn btn-success btn-sm">appNewMemory</button>
      <button @click="selectedComponent = 'appAuthor'" class="btn btn-success btn-sm">appAuthor</button>
      <br><br>
      <hr>
        <!-- <app-memory>
          <h1 slot="heading">Slot Kullanımı h1 ...</h1>
          <p>Slot Kullanımı p ...</p>
        </app-memory> -->

        <!-- keepAlive sayesinde render olmuyor  -->
        <keep-alive> 
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import Memory from "./components/Memory.vue";
  import NewMemory from "./components/NewMemory.vue";
  import Author from "./components/Author.vue";


  export default {

    data : function() {
      return {
        selectedComponent : "appMemory"
      }
    },
    components : {
      appMemory : Memory,
      appNewMemory : NewMemory,
      appAuthor : Author
    }
  }
</script>
