<template>
    <div>
        <div class="content-head  box-shadow">
            <span>分类</span>
            <span>IOS</span>
        </div>
        <TheContent />
        <ThePaginator />
    </div>
</template>

<script>
    import TheContent from "@/components/TheContent";
    import  ThePaginator from "@/components/ThePaginator";

    export default {
        name: "CateDetail",
        components: {
            ThePaginator,
            TheContent,
        },
    }
</script>

<style scoped>
.content-head>span{
    padding: 5px;
}
.content-head>span:nth-of-type(1):after{
    margin-left: 10px;
    color: #b5b5b5;
    content: "\0002f";
}
</style>