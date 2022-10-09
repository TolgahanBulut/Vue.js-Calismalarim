<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">Kullanıcı Adı Değiştir</button>
    <p> Childtan Gelen = {{childData}}</p>
    <p>Kullanıcı Yaşı : {{age}}</p>

    <hr>
    <div class="row">
      <app-user-detail @data="childData = $event" :name="title" :age="age"></app-user-detail>
      <app-user-edit @ageWasEdited ="age = $event"></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    },
    data : function() {
      return{
        title : "Tolga",
        childData : "",
        age : 26
      }
    },
    methods : {
      changeName : function(){
        this.title = "Bulut"
      },
      changeAge : function(){
        this.yas = "32"
      }
    }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
