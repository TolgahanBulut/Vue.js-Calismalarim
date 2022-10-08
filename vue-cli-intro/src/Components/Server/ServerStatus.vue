<template>

    <div>
     <p> Server Durumu : {{status}}  </p>
     <button @click="openServer">Serveri Aç/Kapa</button>
 
    </div>
 </template>
 
 <script> export default {
     data : function(){
         return {
             status : "Kapalı"
         }
     },
     methods : {
         openServer(){
             if(this.status == "Kapalı"){
                 this.status = "Açık"
             }else {
                 this.status = "Kapalı"
             }
         }
     }
 
 }
 </script>

 <style scoped>
 div {
    border: 1px solid red;
 }
 </style>