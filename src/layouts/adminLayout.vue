<template>
    <div  style="border-top:2px solid black;background-color: white;">
        <TheHeader />
        <TheLeft />
        <div id="main_admin" class="main" >
            <div class="main-inner">
                <router-view/>

            </div>
        </div>
        <div id="footer">
            123123123
        </div>
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheLeft from '@/components/admin/TheLeft.vue'

    export default {
        data() {
            return {
            };
        },
        components: {
            TheHeader,
            TheLeft,
        },
    };
</script>
<style>
    #main_admin{
        float: left;
        width: 1200px;
        height: 800px;
        margin-left: 2%;
        margin-top: 2%;
    }

    #footer{
        float: left;
        width:100%;
        margin-left: 2%;
        margin-top: 2%;
    }
</style>