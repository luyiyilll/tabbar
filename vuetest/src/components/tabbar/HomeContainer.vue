<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>




        <h3>Home</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.getLun()
    },
    methods: {
        getLun(){
            this.$http.get('http://lulu.dev.dxdc.net').then(result=>{
                console.log(result.body);
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
       &:nth-child(1){
           background-color: pink
       }
         &:nth-child(2){
           background-color: lightblue
       }
         &:nth-child(3){
           background-color: lightgreen
       }
    }
}
</style>