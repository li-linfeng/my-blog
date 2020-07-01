<template>
    <div class="category box-shadow">
        <h2>分类</h2>
        <ul>
            <li v-for="item in categorys"  :key="item.id">
                <router-link :to="{name:'cateDetail',params:{id:item.id}}" class="btn" rel="contents">
                    <span>{{item.title}}</span>
                    <span>{{item.num}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data(){
           return {
                    categorys: [
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

.category{
    width: 80%;
    padding-bottom: 2rem;
}

.category h5{
    text-align: left;
    padding: 0.5rem;
}

.category>ul{
    padding: 0;
    display: flex;
    font-size: 0.75rem;
    justify-content:flex-start;
    flex-wrap: wrap;
    list-style: none;
}
.category>ul li{
    width: 100%;
    margin-bottom: 5px;
}
.category>ul li:hover{
    background:#F5F5F5 ;
}
.category>ul a{
    float: left;
    width: 100%;
    color: #4e6e8e;
    text-decoration: none;
    padding: 0.5rem 0;
}
.category>ul a>span{
    display: block;
    line-height: 1rem;
}

.category>ul a>span:nth-of-type(1){
    padding: 5px 10px;
    float: left;
}
.category>ul a>span:nth-of-type(2){
    float: right;
    background:#E7E7E7 ;
    text-align: center;
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
}
.category>ul li:hover a>span:nth-of-type(2){
    background:#F5F5F5 ;
}
.category>ul a:hover{
    cursor: pointer;
    font-weight: 550;
}

</style>