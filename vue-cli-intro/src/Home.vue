<template>

   <div>
    <p> Lamba Durumu : {{status}} </p>
    <hr>
    <button @click="openLamb">Lambayı Aç</button>

   </div>
</template>

<script> export default {
    data : function(){
        return {
            status : "Kapalı"
        }
    },
    methods : {
        openLamb(){
            if(this.status == "Kapalı"){
                this.status = "Açık"
            }else {
                this.status = "Kapalı"
            }
        }
    }

}
</script>