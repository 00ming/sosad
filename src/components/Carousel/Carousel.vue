<template id="">
  <div class="container">
    <div class="nav">
      <el-carousel height="300px">
          <el-carousel-item v-for="item in 4">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
    </div>


  </div>

</template>
<style>
  .container{
    text-align: center;
    margin: 0 auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
