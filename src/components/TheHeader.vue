<template>
<header>
  <div class="header" >
      <div class="header-content">
          <div class="search-box">
              <input  autocomplete="off" spellcheck="true" value="" class="" placeholder="">
          </div>
          <div class="category">
              <ul>
                  <li v-for="item in navList" :key="item.title" @click="go(item.link)">{{item.title}}</li>
              </ul>
          </div>
      </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'TheHeader',
    data() {
        return {
            navList: [
                {
                    title: "首页",
                    link: "/",
                },
                {
                    title: "文章",
                    link: "/timeline",
                },
                {
                    title: "分类",
                    link: "/categorys",
                },
                {
                    title: "标签",
                    link: "/tags",
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
.header{
    background: white;
    border-bottom: 1px solid grey;
    padding:0.6rem 0 0.1rem;
}
.header .header-content{
    width: 80%;
    margin: 0 auto;
}

.search-box{
    vertical-align: top;
    display: inline-block;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-left: 20%;
}

.search-box input {
    width: 10rem;
    height: 2rem;
    color: #4e6e8e;
    display: inline-block;
    border: 1px solid #cfd4db;
    border-radius: 2rem;
    font-size: .9rem;
    line-height: 2rem;
    padding: 0 .5rem 0 3rem;
    outline: none;
    transition: all .2s ease;
    background: #fff url("../assets/images/search.png") 0.2rem .05rem no-repeat;
    background-size: 2rem;
}

.category{
    display: inline-block;
    width: 30rem;
}

.category ul{
    float: left;
    list-style: none;
}
.category ul li{
    text-align: center;
    line-height:2rem ;
    float: left;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
}
.category ul li:hover{
    cursor: pointer;
}
</style>
