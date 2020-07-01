<template>
    <div class="tag box-shadow">
        <h5>标签</h5>
        <div>
            <a href="www.baidu.com" target="_blank">
                <span>么么爪啊实打实</span>
                <span>3</span>
            </a>
            <a href="www.baidu.com" target="_blank">
                <span>么么爪阿松大</span>
                <span>3</span>
            </a>
            <a href="www.baidu.com" target="_blank">
                <span>么么搜索爪</span>
                <span>3</span>
            </a>
            <a href="www.baidu.com" target="_blank">
                <span>么么爪</span>
                <span>3</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheTags',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*作者博客标签信息*/

    .tag{
        padding-bottom: 2rem;
    }

    .tag h5{
        text-align: left;
        padding: 0.5rem;
    }

    .tag>div{
        width: 80%;
        margin-left: 10%;
        display: flex;
        font-size: 0.75rem;
        justify-content:flex-start;
        flex-wrap: wrap;
    }
    .tag>div a{
        display: block;
        float: left;
        color: #4e6e8e;
        text-decoration: none;
        margin:0.2rem;
        padding: 0.5rem 0;
    }

    .tag>div a>span:nth-of-type(1){
        padding: 0.5rem 0.7rem 0.5rem 0.2rem;
        background:#F5F5F5 ;
    }
    .tag>div a>span:nth-of-type(2){
        background:#E7E7E7 ;
        margin-right: 0.2rem;
        padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    }
    .tag>div a:hover{
        cursor: pointer;
        font-weight: 550;
    }
</style>
