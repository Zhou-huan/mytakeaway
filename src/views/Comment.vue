<template>
  <div class="comment">
      <div class="views">
        <div class="viewsLeft">
            <h3>3.9</h3>
            <span>综合评分</span>
            <p>高于周边商家69.2%</p>
        </div>
        <div class="star">
          <div class="starinner">
              <div class="server">
                <span class="starItem">服务态度</span>
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_off@2x.png" alt="">
                <span class="gredes">3.9</span>
              </div>
              <div class="server">
                <span class="starItem">环境卫生</span>
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_off@2x.png" alt="">
                <span class="gredes">4.0</span>
              </div>
              <div class="server">
                <span class="starItem">送达时间</span>
                <span class="sendTime">44分钟</span>
              </div>
            </div>
          </div>
      </div>
      <div class="gap"></div>
      <div class="viewsBox">
        <div class="sbnav">
          <a href="" class="all">全部<small>57</small></a>
          <a href="" class="satisfied">满意<small>47</small></a>
          <a href="" class="nosatisfied">不满意<small>10</small></a>
        </div>
        <div class="content">
          <img src="img/special_3@2x.png" alt="">只看有内容的评价
        </div>
        <ul class="details">
          <li>
            <div class="viewsleft"><img src="img/index100_11.jpg" alt=""></div>
            <div class="viewsright">
              <p class="autherName">齐天大圣<span>2019-02-13 12:23</span></p>
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_off@2x.png" alt="">
              <span class="times">80分钟送达</span>
              <p>油条凉了，而且很慢啊，哎，不太满意，希望下次卖家能够及时点。油条可以采取一些措施，让它不要那么快就凉了</p>
              <img src="" alt=""><span class="kind">香菇瘦肉粥</span><span class="kind">原生油条</span>
            </div>
          </li>
          <li>
            <div class="viewsleft"><img src="img/index100_11.jpg" alt=""></div>
            <div class="viewsright">
              <p class="autherName">齐天大圣<span>2019-02-13 12:23</span></p>
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_off@2x.png" alt="">
              <span class="times">80分钟送达</span>
              <p>油条凉了，而且很慢啊，哎，不太满意，希望下次卖家能够及时点。油条可以采取一些措施，让它不要那么快就凉了</p>
              <img src="" alt=""><span class="kind">香菇瘦肉粥</span><span class="kind">原生油条</span>
            </div>
          </li>
          <li>
            <div class="viewsleft"><img src="img/index100_11.jpg" alt=""></div>
            <div class="viewsright">
              <p class="autherName">齐天大圣<span>2019-02-13 12:23</span></p>
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_on@2x.png" alt="">
                <img src="img/star24_off@2x.png" alt="">
              <span class="times">80分钟送达</span>
              <p>油条凉了，而且很慢啊，哎，不太满意，希望下次卖家能够及时点。油条可以采取一些措施，让它不要那么快就凉了</p>
              <img src="" alt=""><span class="kind">香菇瘦肉粥</span><span class="kind">原生油条</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  .comment{
    width: 100%;
    height: 100%;
    .views{
      width: 100%;
      height: 100px;
       border-bottom: 1px solid #ccc;
       display: flex;
       .viewsLeft{
         flex: 2;
         text-align: center;
         display: flex;
         justify-content: center;
         flex-direction: column;
         h3{
           font-size:18px;
           color: orange;
         }
         span{
           font-size:14px;
         }
         p{
           color: rgb(129, 125, 125);
         }
       }
       .star{
          flex: 4;
          display: flex;
          align-items: center;
          .starinner{
              width: 100%;
              height:60%;
              border-left: 1px solid #ccc;
              display: flex;
              justify-content: center;
              flex-direction: column;
              padding-left:10%;
              .server{
                height: 40px;
                .starItem{
                  padding-right:5%;
                }
                .sendTime{
                  color: rgb(112, 111, 111);
                }
                .gredes{
                  padding-left:5%;
                  color: orange;
                }
              }
          }
       }
    }
    .gap{
      width: 100%;
      height: 40px;
      background-color: #f3f6f6;
      border-bottom: 1px solid #ccc;
    }
    .viewsBox{
      width: 100%;
      height: 700px;
      .sbnav{
        display: flex;
        padding-left: 5%;
        width: 90%;
        margin: 0 auto;
        height: 140px;
        border-bottom: 1px solid #ccc;
        align-items: center;
        a{
          width:120px;
          height:64px;
          line-height: 64px;
          text-align: center;
          margin-right:2%;
          color: #000;
        }
        .all{
            background-color:#00a1dc;
            color:#fff;
        }
        .satisfied{
          background-color:#cceef7;
        }
        .nosatisfied{
          background-color:#e9e9ec;
        }
      }
      .content{
        height:100px;
        border-bottom: 1px solid #ccc;
        line-height: 100px;
        padding-left:5%;
        color: rgb(145, 141, 141);
      }
      .details{
        width: 100%;
        li{
          display: flex;
          width: 90%;
          margin: 0 auto;
          align-items: center;
          height:256px;
          padding-top: 10px;
          border-bottom: 1px solid #ccc;
          .viewsleft{
            width: 10%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            img{
              width:50px;
              height:50px;
              border-radius: 50%;
              border:2px solid #ccc;
              margin-top:10px;
            }
          }
          .viewsright{
            width: 90%;
            height: 100%;
            .autherName{
              margin:10px 0;
              span{
                float: right;
                color: #666;
              }
            }
            .times{
              color: #666;
              padding-left:10px;
            }
            .kind{
              display: inline-block;
              width: 15%;
              height:30px;
              margin-right:2%;
              text-align: center;
              line-height: 30px;
              border: 1px solid #ccc;
            }
          }
        }

      }
    }
  }
</style>