<template>
  <div class="product">
    <ul class="aside">
      <ul class="content">
        <template v-for="(value,i) in goodsdata">
          <li :key="i" @click="clickLeft(i)" :class="{selected:curselecte===i}">{{value.name}}</li>
        </template>
      </ul>
    </ul>
    <div class="info">
      <ul class="content">
        <div class="productItem" :id="i" v-for="(v,i) in goodsdata" :key="i">
          <h4>{{v.name}}</h4>
          <div class="msg" v-for="(item,index) in v.foods" :key="index">
            <div class="msgInner">
              <div class="productImgs">
                <img :src="item.image" alt />
              </div>
              <div class="details">
                <h5>{{item.name}}</h5>
                <span>{{item.escription}}</span>
                <br />
                <span>月售{{item.sellCount}}份</span>
                <span>好评率{{item.ating}}</span>
                <p>
                  <big>￥{{item.price}}</big>
                  <del>￥{{item.oldPrice}}</del>
                </p>
              </div>
              <div class="addIcons">
                <img src="img/remove_circle_outline.svg" alt="" @click="numChange(-1,item.name)" v-show="item.count>0"/>
                <span v-show="item.count>0">{{item.count}}</span>
                <img src="img/add_circle.svg" alt  @click="numChange(1,item.name)"/>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import BSroll from "better-scroll";
export default {
  data() {
    return {
      curselecte: 0
    };
  },
  created() {
    //创建期发送ajax请求

  },
  mounted() {
    this.leftScroll=new BSroll(".aside",{
      click:true//派发点击事件(当设置此属性以后，点击事件才会生效)
    });
    this.rightScroll=new BSroll(".info",{
      probeType:3,
      click:true
    });
    this.rightScroll.on('scroll',obj=>{
      let _y=Math.abs(obj.y);
      for(let objItem of this.getDivHeight){
        //如果匹配坐标成功，侧设置当前选中光标
        if(_y<objItem.max && _y>=objItem.min){
          this.curselecte=objItem.index;
          break;//做了想做的事情以后，加上跳出，避免无意义的循环
        }
      }
    });
  },
  methods: {
    //左侧栏li监听点击事件
    clickLeft(i) {
      //设置当前选中的索引
      // console.log(i);
      this.curselecte = i;
      //让右侧面板调用scrollToElement滚动到指定元素上面
      this.rightScroll.scrollToElement(document.getElementById(i),600);
    },
    //设置数量加减事件
    numChange(num,name){
      this.$store.commit('countChange',{num,name})
    }
  },
  computed:{
    //使用计算属性计算DIV高度，极大提升了代码性能，避免了重复DOM操作引起的性能问题
    getDivHeight(){
      let arr=[];
      //计算高度
      for(let i=0;i<this.goodsdata.length;i++){
        arr.push(document.getElementById(i).offsetHeight);
      }
      //可以先计算出我们想要的区间段，累加高度{max,min,index}
      let totalHeight=0;//累加的高度
      let newarr=[];
      for(let n=0;n<arr.length;n++){
        newarr.push({max:arr[n]+totalHeight,min:totalHeight,index:n});
        totalHeight+=arr[n];//每次循环一次就把高度加到总高度上
      }
      return newarr;
    },
    //拿到初始化的数据
    goodsdata(){
      return this.$store.state.goodsdata;
    }
  }
};
</script>

<style lang="less" scoped>
.selected {
  background-color: #fff;
}
.product {
  display: flex;
  .aside {
    flex: 0 0 100px;
    height: 400px;
    background-color: #f3f6f6;
    box-sizing: border-box;
    padding: 0 2%;
    font-size: 14px;
    overflow: auto;
    li {
      height: 60px;
      width: 100%;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .info {
    height: 400px;
    overflow: auto;
    flex: 1;
    h4 {
      width: 100%;
      background-color: #f3f6f6;
      color: rgb(58, 58, 58);
      height: 40px;
      border-left: 2px solid #ccc;
      text-indent: 20px;
      line-height: 40px;
      box-sizing: border-box;
    }
    .msg {
      padding: 5%;
      display: flex;
      .msgInner {
        border-bottom: 1px solid #ccc;
        display: flex;
        width: 100%;
        .productImgs {
          width: 20%;
          img {
            width: 60px;
            height: 60px;
          }
        }
        .details {
          width: 60%;
          padding-left: 8%;
          box-sizing: border-box;
          color: #888;
          font-size: 14px;
          h5 {
            font-size: 16px;
            color: #000;
            padding-bottom: 10px;
          }
          big {
            color: #f00;
            padding-right: 20px;
          }
        }
        .addIcons {
          width: 20%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          margin-bottom: 40px;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>