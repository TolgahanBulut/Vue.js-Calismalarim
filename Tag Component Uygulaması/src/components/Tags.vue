<template>
    <div class="tag-container">
        <Tag
          v-for="(tag,index) in tags"
          :tag = "tag"
          :index = "index"
          @removeOneTagEvent = "removeOneTag($event)"
        />
        

        <input type="text" 
        @keydown.enter="addTag"
        @keydown.backspace="removeTag">
        <div class="error" v-if="error" > Bu tag önceden alınmış !!!</div>


    </div>
</template>

<script>
    import Tag from './Tag.vue'
    export default {
        components : {
            Tag
        },
        data(){
        return {
            tags : [],
            error : false
            }
        },
        methods : {
            addTag(event){
            let text = event.target
            let matchedTag = false

            if(text.value.length > 0){
                this.tags.forEach(tag => {
                    if(tag.toLowerCase() === text.value.toLowerCase()){
                        matchedTag = true
                    }
                })
                if(!matchedTag){
                    this.tags.push(text.value);
                    text.value = ''
                }else {
                    this.error = true;
                    setTimeout(() => {
                        this.error = false
                    }, 2000);
                }
            }
            
            },
            removeTag(event){
            if(event.target.value <=0){
                this.tags.splice(this.tags.length -1, 1)
            }
            
            },
            removeOneTag(index){
            this.tags.splice(index, 1)
            }
    }

        
    }
</script>

<style scoped>

.tag-container{
        border: 1px solid #ccc;
        padding: 20px;
    }

    input {
        outline: none;
        height: 30px;
        width: 100px;
    }

    .error{
        color: red;
        font-size: 13px;
    
    }
</style>