<template>
    <div class="tag-container">
        <app-tags></app-tags>

    </div>
</template>

<script>
import Tags from './components/Tags.vue'
export default {
    components : {
        appTags : Tags
    }
}
</script>

<style>
    body{
        font-family: sans-serif;
    }
    
</style>
