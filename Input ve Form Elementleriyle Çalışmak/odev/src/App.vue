<template>
    <div class="container">
        <form v-if="!isSubmit">
            <div class="row"  >
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label>Adınızı Girin ! </label>
                        <input type="text" class="form-control" v-model="userData.name">
                    </div>
                    <div class="form-group">
                        <label>Soyadınızı Girin ! </label>
                        <input type="text" class="form-control"
                        v-model="userData.surname">
                    </div>
                    <div class="form-group">
                        <label>Mailinizi Girin ! </label>
                        <input type="mail" class="form-control"
                        v-model="userData.mail">
                    </div>
                    <div class="form-group">
                        <label>Şifrenizi Girin ! </label>
                        <input type="password" class="form-control"
                        v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label>Cinsiyetinizi Seçin ! </label><br>
                        <input v-model="userData.gender" type="radio" value="Erkek"> Erkek
                        <input v-model="userData.gender" type="radio" value="Kadın"> Kadın
                    </div>

                    <button class="btn btn-info" @click.prevent="submit">Gönder</button>

                    <!-- Soru 2 -->
                    <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
                    <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

                    <!-- Soru 3 -->
                    <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
                </div>
            </div>
        </form>
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgier</h4>
                    </div>
                    <div class="panel-body">
                        <p>Tam Ad: {{userData.name}} {{userData.surname}} </p>
                        <p>E-mail: {{userData.mail}} </p>
                        <p>Şifre: {{userData.password}}</p>
                        <p>Cinsiyet: {{userData.gender}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                userData : {
                    name : '',
                    surname : '',
                    mail : '',
                    password : null,
                    gender : ''

                },
                isSubmit : false
            }
        },
        methods : {
            submit(){
                this.isSubmit = true
            }
        }
    }
</script>

<style>
</style>
