<template>
    <div  style="border-top:2px solid black">
        <TheHeader />
        <TheLeft />
        <div id="main" class="main">
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
    import TheLeft from '@/components/basic/TheLeft.vue'
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
    #main{
        float: left;
        width: 40%;
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