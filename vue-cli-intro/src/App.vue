<template>
  <div class="container-sm mt-4">
      <app-header></app-header>
      <hr>
      <div class="row">
          <div class="col-xs-12 col-sm-6">
              <ul class="list-group">
                  <li class="list-group-item" v-for="server in 5">
                      <server-status ></server-status>
                  </li>
              </ul>
          </div>
          <div class="col-xs-12 col-sm-6">
              <sunucu-info></sunucu-info>
          </div>
      </div>
      <hr>
      <app-footer class="mt-2"> </app-footer>
  </div>
</template>
<script>
  import ServerStatus from './Components/Server/ServerStatus.vue'
  import Header from './Components/Common/Header.vue'
  import Footer from './Components/Common/Footer.vue'
  import ServerInfo from './Components/Server/ServerInfo.vue'

  export default {
      components : {
          serverStatus : ServerStatus,
          appHeader : Header,
          appFooter : Footer,
          sunucuInfo : ServerInfo,
      }
  }
</script>