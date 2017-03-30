<template >
  <div class="home">


    <carousel></carousel>
    <div class="context">
      <el-tabs v-model="activeName2" type="card" >
        <el-tab-pane label="餐厅介绍" name="first"><div class="">
          <div class="text">
            <p>&nbsp;&nbsp;位于106 层 423米高的粤美味餐厅是广州最高的旋转餐厅,可容纳130-150人就餐,已于2014年8月5日获得吉尼斯世界记录的验证，被评为“建筑物中最高的旋转餐厅”。优雅的装修风格, 舒适的就餐环境, 充满地中海特色风味的丰盛美馔,的旋转餐厅享受地中海美食。 适合与家人、朋友、情侣一同分享。一年四季新鲜空运的食材, 让人垂涎欲滴。360 度旋转餐厅的开阔视野, 品尝美食的同时尽享城中美景, 让人心旷神怡, 流连忘返。</p>
          </div>
          <div class="pic">
            <img src="./pic1.jpg" width="100%">
          </div>
          </div></el-tab-pane>
          <el-tab-pane label="特色菜介绍" name="second"><div class="menu">
            <el-row>
  <el-col :span="6" v-for="(o, index) in 3" :offset="index > 0 ? 1 : 2">
    <el-card :body-style="{ padding: '0px' }">
      <img src="./hetaobao.jpg" class="image">
      <div style="padding: 14px;">
        <span>好吃的核桃包</span>
      </div>
    </el-card>
  </el-col>
</el-row>
          </div></el-tab-pane>
      </el-tabs>
    </div>


    <div class="btn" @click="openMsg">
      <i class="el-icon-information"></i>
    </div>
  </div>
</template>
<script>
  import carousel from '../Carousel/Carousel'
  export default {
    components: {
      carousel
    },
    data () {
      return {
        activeName2: 'first',
        newsmsg:"在本店消费满200送20。"
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      openMsg () {
        this.$notify.info({
          title: '优惠新消息',
          message: this.newsmsg,
          duration:2000
        });
      }
    }


}
</script>
<style lang="scss">
  .home{
    width: 80%;
    margin: 0 auto;
    .context{
      .text{
        display: inline-block;
        width: 40%;
        vertical-align: top;
        padding-left: 20px;
      }
      .pic{
        display: inline-block;
        width: 40%;
        margin-left: 10%;
      }
      .menu{
        text-align: center;
        margin: 0 auto;
      }

    }
    .btn{
      position: fixed;
      right: 30px;
      bottom: 30px;
      font-size: 50px;
      color: #1D8CE0;

    }

  }


</style>
