<template>
    <div id="app">
      <v-app id="inspire">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1">
        </v-data-table>
      </v-app>
</div>
</template>

<script>

export default {
  
                data: {
                    userList: []
                },
                mounted: function() {
                    var root = 'https://run.mocky.io/v3/9ea07671-86ea-4b0a-9b3b-0f195ccab3a3';
                    this.$http.get(root).then(function (resp) {
                        if (resp.status == 200) {
                            this.userList = resp.data;
                        }
                    }); 
                }            
               



}

</script>