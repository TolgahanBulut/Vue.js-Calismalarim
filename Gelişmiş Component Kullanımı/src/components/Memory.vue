<template>
  <div>
    <div class="memory">
      <slot name="heading"></slot>
    </div>
    <div class="memory">
     <slot></slot>
    </div>
    <div class="memory">
     <slot name="author">
      <h3>Author</h3>
      <p>Buraya SlotDefault tan içerik geliyor !!</p>
     </slot>
    </div>

  </div>
  
</template>
<script>
export default {
  
}
</script>
