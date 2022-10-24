<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComp = 'appBlue'" class="btn btn-primary">Mavi Temayı Yükle</button>
                <button @click="selectedComp = 'appGreen'" class="btn btn-success">Yeşil Temayı Yükle</button>
                <button @click="selectedComp = 'appRed'" class="btn btn-danger">Kırmızı Temayı Yükle </button>
                <hr>

                <component :is="selectedComp">
                    <h1>{{selectedComp}} Tema</h1>
                    <p>İçerik</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data : function(){
            return {
                selectedComp : 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
