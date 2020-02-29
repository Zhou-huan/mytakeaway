<template>
    <div class="business">
        <div class="header">
            <div class="headerLeft">
                <h3>粥品香坊(大运村)</h3>
                <p>
                     <img src="img/star24_on@2x.png" alt="">
                    <img src="img/star24_on@2x.png" alt="">
                    <img src="img/star24_on@2x.png" alt="">
                    <img src="img/star24_on@2x.png" alt="">
                    <img src="img/star24_off@2x.png" alt="">
                    （661）月售690单
                </p>
            </div>
            <div class="headerRight">
                <img src="" alt=""><br>
                已收藏
            </div>
        </div>
        <div class="prices">
            <div class="priceItem specials">
                <p class="priceTitle">起送价</p>
                <h3>20<small>元</small></h3>
            </div>
            <div class="priceItem">
                <p  class="priceTitle">商家配送</p>
                <h3>4<small>元</small></h3>
            </div>
            <div class="priceItem">
                <p  class="priceTitle">平均配送时长</p>
                <h3>39<small>分钟</small></h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
   .business{
       width: 100%;
       height: 100%;
       .header{
           display:flex;
           width: 90%;
           height:150px;
           border-bottom: 1px solid #ccc;
           margin: 0 auto;
           .headerLeft{
               width: 60%;
               padding:3%;
               color: #666;
               h3{
                   font-size:22px;
                   color: #000;
               }
           }
           .headerRight{
               width: 40%;
               display: flex;
               justify-content:center;
               align-items: center;
           }
       }
       .prices{
           width: 100%;
           height:150px;
           display: flex;
           justify-content: space-around;
           align-items: center;
           border-bottom: 1px solid #ccc;
           .priceItem{
               height:80%;
               flex: 1;
               text-align: center;
               .priceTitle{
                   color: #666;
                   font-size: 18px;
               }
               h3{
                   font-size: 30px;
                   font-weight: 500;
                   small{
                       font-size:18px;
                   }
               }
           }
           .specials{
               border-right: 1px solid #ccc;
           }
       }
   } 

</style>