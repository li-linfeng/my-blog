<template>
    <div class="tag box-shadow">
        <h5>标签</h5>
        <ul>
            <li v-for="item in tags"  :key="item.id">
                <router-link :to="{name:'tagDetail',params:{id:item.id}}" class="btn" rel="contents">
                    <span>{{item.title}}</span>
                    <span>{{item.num}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tags",
        data(){
            return {
                tags: [
                    {
                        id: 1,
                        title: "PHP",
                        num:12,
                    },
                    {
                        id: 2,
                        title: "Laravel",
                        num:3,
                    },
                    {
                        id: 3,
                        title: "MySQL",
                        num:1,
                    },
                    {
                        id: 4,
                        title: "Redis",
                        num:2,
                    },
                ]}
        },
    }
</script>

<style scoped>
.tag{
    width: 70%;
    padding-bottom: 2rem;
}

.tag h5{
    text-align: left;
    padding: 0.5rem;
}

.tag>ul{
    padding: 0;
    display: flex;
    font-size: 0.75rem;
    justify-content:flex-start;
    flex-wrap: wrap;
    list-style: none;
}
.tag>ul li{
    float: left;
    margin-bottom: 5px;
    margin-right: 5px;
    background:#F5F5F5 ;
}
.tag>ul a{
    float: left;
    width: 100%;
    color: #4e6e8e;
    text-decoration: none;
}
.tag>ul a>span{
    display: block;
    line-height: 1rem;
}

.tag>ul a>span:nth-of-type(1){
    padding: 5px 10px;
    float: left;
}
.tag>ul a>span:nth-of-type(2){
    float: right;
    background:#E7E7E7 ;
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
}

</style>