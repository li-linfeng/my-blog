<template>
    <div class="paginator">
        <div class="previous page">上一页</div>
        <div class="center">
            <div class="number page ">1</div>
            <div class="number page">2</div>
        </div>
        <div class="next page ">下一页</div>
    </div>
</template>

<style scoped>
.paginator {
    display: flex;
    justify-content: space-between;
    padding:0 1rem ;
    margin-bottom:100px;
    margin-top: 20px;
}
.page{
    font-size:0.8rem ;
    line-height: 2rem;
    color: #363636;
    width: 4rem;
    height: 2rem;
    background:white ;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.1);
    transition: opacity 0.3s ease-out 0s, transform 0.3s ease-out 0s, box-shadow 0.3s ease-in-out 0s;
    opacity: 1;
    transform-origin: center top;
    text-align: center;
}
.center{
    display: flex;
    justify-content: space-between;
}
.center .number{
    width: 2rem;
    margin-right:10px;
}

</style>