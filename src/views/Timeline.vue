<template>
    <div>
        <div class="timeline-card  box-shadow">
            <div class="timeline-title">2019</div>
            <div class="timeline-content">
                <div class="timeline-item">
                    <div class="time">2019-07-12</div>
                    <div class="content"><a href="">如果明天放假你要干什么</a></div>
                </div>
            </div>
        </div>
        <ThePaginator />
    </div>
</template>
<script>
    import ThePaginator from '@/components/ThePaginator.vue'
    export default {
        data() {
            return {
            };
        },
        components: {
            ThePaginator
        },
    };
</script>

<style scoped>
.timeline-card{
 background: #FFFFFF;
 padding: 1.5rem;
 margin-bottom: 20px;
}
.box-shadow{
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.1);
    transition: opacity 0.3s ease-out 0s, transform 0.3s ease-out 0s, box-shadow 0.3s ease-in-out 0s;
    opacity: 1;
    transform-origin: center top;
}
.timeline-title{
    width: 2.5rem;
    height: 1rem;
    border-radius: 3px;
    background: #3273dc;
    color: white;
    padding: 0.2rem;
    font-size:0.75rem ;
    text-align: center;
    line-height:1rem ;
}
.timeline-content{
    margin-left: 1rem;
    padding: 1rem 1.2rem 0;
    border-left: 1px solid #dbdbdb;
    position: relative;
}
.timeline-item{
    margin-bottom: 2rem;
}
.timeline-item:before{
    position: relative;
    width: 9px;
    height: 9px;
    top: 10px;
    background:#dbdbdb;
    border-radius: 4.5px;
    content: '';
    display: block;
    left: calc(-5px - 1.2rem);

}

.timeline-item:last-child:after{
    bottom: 0;
    left: -3px;
    width: 9px;
    height: 27px;
    background: #FFFFFF;
    content: '';
    display: block;
    position: absolute;
}

.timeline-content .time{
    text-align: left;
    font-size: 0.6rem;
    color: #7a7a7a;
    margin-bottom: 0.4rem;
}
.timeline-content .content{
    text-align: left;
    color: black;
    font-size: 0.8rem;
}
.timeline-content .content a{
    text-decoration: none;
    color: black;;
}
.timeline-content .content a:hover{
    color:  #4e6e8e;
}
</style>