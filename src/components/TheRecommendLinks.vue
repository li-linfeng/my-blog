<template>
    <div class="link box-shadow">
        <h5>推荐链接</h5>
        <div>
            <a href="www.baidu.com" target="_blank">么么爪</a>
            <a href="www.baidu.com" target="_blank">么么爪</a>
            <a href="www.baidu.com" target="_blank">么么爪</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheRecommendLinks',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*作者博客友链信息*/
    .link{
        padding-bottom: 2rem;
    }

    .link h5{
        text-align: left;
        padding: 0.5rem;
    }
    .link>div{
        width: 80%;
        margin-left: 10%;
        display: flex;
        font-size: 0.75rem;
        justify-content: space-between;
    }
    .link>div a{
        display: block;
        float: left;
        color: #4e6e8e;
        text-decoration: none;
    }
    .link>div a:hover{
        cursor: pointer;
        font-weight: 550;
    }


</style>
