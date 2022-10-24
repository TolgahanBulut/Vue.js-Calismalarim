<template>

    <div>
        <p>NewMemory Componenti..</p>
        <button @click="counter++" class="btn btn-danger">Arttır</button>
        <hr>
        <p>{{counter}}</p>
    </div>
    
</template>
    
<script>
    
    export default {
        data : function () {
            return {
                counter : 0
            }
        },
            destroyed(){
                console.log("Destroyed !!")
            },
            activated(){
                console.log("Actived!!")
            },
            deactivated(){
                console.log("DeActived!!")
            }
        }
        

        

    
 </script>