<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'Deneme yanilma metodu her zaman iyidir..'"></p>
        <p v-html="'<strong>Bu da v-html</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay.flash="{mainColor : 'lightblue', secondcolor : 'violet' , delay : 1000}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae culpa doloribus, ex
          facilis fugiat, fugit magni molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas ratione sequi
          unde ut!</p>
          <p v-color.delay.flash="{mainColor : 'magenta', secondcolor : 'black', delay : 1}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae culpa doloribus, ex
          facilis fugiat, fugit magni molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas ratione sequi
          unde ut!</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    directives : {
      color : {
        
  bind(el,binding,vnode){

        let delay = 0;

        if(binding.modifiers["delay"]){
          delay = 2000;
        }

        if(binding.modifiers["flash"]){
          let firstcolor = binding.value.mainColor;
          let secondcolor = binding.value.secondcolor;
          let currentcolor = firstcolor;

          setTimeout(()=>{
            setInterval(()=>{
              currentcolor == secondcolor ? currentcolor = firstcolor : currentcolor = secondcolor;
              if(binding.arg == 'background'){
                el.style.backgroundColor = currentcolor;
              }else{
                el.style.color = currentcolor;
              }
            },binding.value.delay)
          
          })


        }else {
          setTimeout(()=>{
          if(binding.arg == 'background'){
            el.style.backgroundColor = binding.value;
          }else{
            el.style.color = binding.value;
          }
          },delay)
        }
        
        }
      }
    }
  }
</script>

<style>

</style>
