<template>
    <div class="shopcar">
        <p class="sendprice">已满足起送价</p>
     <ul>
      <li class="liTitle">
        <span>购物车</span>
        <button @click="clearShop()">清空购物车</button>
      </li>
      <li v-for="(val,i) in getshopcarlist" :key="i">
        <span>{{val.name}}</span>
        <span class="redprice">￥{{val.price*val.count}}</span>
        <div>
          <button @click="changenum(-1,val.name)">-</button>&emsp;
          <span>{{val.count}}</span>&emsp;
          <button @click="changenum(1,val.name)">+</button>
        </div>
      </li>
    </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        },
        computed:{
           getshopcarlist(){
               return this.$store.getters.getshopcarlist;
           } 
        },
        methods:{
            changenum(num,name){
                this.$store.commit('countChange',{num,name});
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>