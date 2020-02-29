<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <div class="headerTop">
        <div class="imgBox">
          <img :src="data.avatar" alt />
        </div>
        <div class="headerCenter">
          <h3 class="title">
            <img src="img/brand@2x.png" alt />
            {{data.name}}
          </h3>
          <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
          <p>
            <img src="img/decrease_1@2x.png" alt />
            <template v-for="(v,i) in data.supports">
              <span  :key="i">{{v.description[0]}}</span>
            </template>
          </p>
        </div>
        <div class="num"><span>5个 ></span></div>
      </div>
      <div class="headerBottom">
        <img src="img/bulletin@2x.png" alt />
        <p>{{data.bulletin}}</p>&gt;
      </div>
    </div>
    <!-- 导航部分 -->
    <div class="nav">
      <router-link to="/home/product" :class="{actived:isShowTitle==0}"><span @click="isShowTitle=0">商品</span></router-link>
      <router-link to="/home/comment" :class="{actived:isShowTitle==1}"><span @click="isShowTitle=1">评论</span></router-link>
      <router-link to="/home/business" :class="{actived:isShowTitle==2}"><span @click="isShowTitle=3">商家</span></router-link>
    </div>
    <!-- 中间主体变化的部分 -->
    <div class="main">
      <router-view />
    </div>
    <!-- 尾部 -->
     <!-- vue事件支持直接书写JS代码，可以不用给一个函数，但是仅限于简短1行代码 -->
     <div class="shopBoard" v-show="showBoard">
        <shopCar/>
     </div>
    <div class="footer" @click="showBoard=!showBoard">
      <div class="shopCar">
        <div class="innerBox">
          <img src="img/shopping_cart.svg" class="iconCar" />
        </div>
      </div>
      <div class="leftFooter">
        ￥
        <span>{{getTotalPrice}}</span>
      </div>
      <div class="centerFooter">
        另需配送费￥
        <span>{{data.deliveryPrice}}</span>元
      </div>
      <div class="rightFooter">
        ￥
        <span>{{data.minPrice}}</span>起送
      </div>
    </div>
  </div>
</template>

<script>
import shopCar from './Shopcar'
import {getSeller} from '@/api/apis'
export default {
    data() {
        return {
            data:{},
            isShowTitle: 0,//当前默认的导航选择
            showBoard:true//购物车面板是否影藏true显示false影藏
        }
    },
    created(){
        //一进入页面，立即初始化vuex的列表数据
        this.$store.dispatch('getGoodsdata')//触发action通知函数
        //获取商家信息
        getSeller().then(res=>{
          this.data=res.data.data//保存数据
        })
    },
    computed:{
        //购物车总价
        getTotalPrice(){
          let price=0;
          for(let obj of this.$store.getters.getshopcarlist){
            price+=obj.price*obj.count;
          }
          return price
        }
    },
    components:{
      shopCar
    }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    flex: 0 0 170px;
    background-color: rgb(63, 60, 60);
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 14px;
    .headerTop {
      flex: 0 0 140px;
      padding: 5%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      .imgBox {
        width:25%;
        margin-right: 3%;
        img {
          width: 80px;
        }
      }
      .headerCenter {
        width: 58%;
        .title {
          font-size: 16px;
          img {
            width: 40px;
          }
        }
        p {
          font-size: 12px;
          img {
            width: 20px;
          }
        }
      }
      .num {
        width: 15%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        font-size: 12px;
        span{
            width: 100%;
            text-align: center;
            line-height: 25px;
            height: 25px;
            border-radius: 20%;
            background-color: rgba(5, 5, 5, 0.705);
            margin-bottom: 20px;
        }
      }
    }
    .headerBottom {
      flex: 0 0 30px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      box-sizing: border-box;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.479);
      width: 100%;
      img {
        width: 30px;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 4px;
        box-sizing: border-box;
      }
    }
  }
  .nav {
    flex: 0 0 50px;
    display: flex;
    border-bottom: 1px solid #ccc;
    a {
      flex: 1;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      color: #000;
    }
     .actived{
          color: #f00;
      }
  }
  .main {
    flex: 1;
  }
  .shopBoard{
    width: 100%;
    background-color: rgb(158, 41, 41);
    position: fixed;
    bottom: 50px;
  }
  .footer {
    width: 100%;
    flex: 0 0 50px;
    background-color: rgb(23, 43, 53);
    color: rgba(255, 255, 255, 0.74);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    font-size: 14px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    .shopCar {
      width: 20%;
      .innerBox {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgb(84, 95, 110);
        background-size: 40px 40px;
        margin-top: -20px;
        margin-left: 8%;
        border: 8px solid rgb(23, 43, 53);
        display: flex;
        justify-content: center;
        align-items: center;
        .iconCar {
          width: 30px;
          height: 30px;
        }
      }
    }
    .leftFooter {
      width: 15%;
      position: relative;
    }
    .rightFooter {
      width: 25%;
      background-color: rgb(141, 144, 145);
    }
    .centerFooter {
      width: 40%;
    }
  }
}
</style>