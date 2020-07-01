<template>
    <div class="author box-shadow">
        <div class="info">
            <img src="../assets/images/author.png" alt="作者的头像">
            <div class="name content">Silence</div>
            <div class="signature content">明天和意外哪个先来?</div>
        </div>
        <div class="blog" >
            <div v-for="item in navList" :key="item.title" @click="go(item.link)">
                <span>{{item.title}}</span>
                <span>{{item.num}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheAuthor',
        data() {
            return {
                navList: [
                    {
                        title: "文章",
                        link: "/timeline",
                        num:98,
                    },
                    {
                        title: "分类",
                        link: "/categorys",
                        num:68,
                    },
                    {
                        title: "标签",
                        link: "/tags",
                        num:35,
                    }
                ]
            };
        },
        methods: {
            go(link) {
                this.$router.push(link);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*作者个人信息*/
    .author .info{
        padding-top: 1rem;
        text-align: center;
    }
    .author .info img{
        display: block;
        margin: 1rem auto ;
    }

    .author .info .name{
        font-size: 1rem;
    }
    .author .info .signature{
        font-size: 0.725rem;
    }
    .author .info .content{
        margin-top: 0.2rem;
    }

    /*作者博客信息*/
    .author .blog{
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
    }
    .author .blog>div{
        padding: 0.5rem 0;
        float: left;
        margin:0 0.7rem;
    }
    @keyframes my_bgcolor
    {
        from {background: white;}
        to {background: #f2f2f2;}
    }
    .author .blog>div:hover{
        animation: my_bgcolor 1s;
        cursor: pointer;
    }
    .author .blog>div span{
        display: block;
        float: left;
        width: 100%;
        font-size:  0.725rem;
        text-align: center;
    }
    .blog>div span:nth-of-type(2){
        font-size:1.2rem;
        margin-top: 0.3rem;
        font-weight: 550;
        text-align: center;
    }
</style>
