<template >
  <div class="top">
    <div class="left">
      <el-button type="text">请登录</el-button>

    </div>
    <div class="right">
      <el-button type="text">欢迎{{name}}</el-button>
    </div>
    <div class="nav">
      <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home" >首页</el-menu-item>
      <el-menu-item index="menu">网上菜单</el-menu-item>
      <el-menu-item index="booking">我要订餐</el-menu-item>
      <el-menu-item index="active">最新活动</el-menu-item>
      <el-menu-item index="about">关于我们</el-menu-item>
      </el-menu>
    </div>

  </div>
</template>
<script>
  export default{
    data () {
      return {
        name: 'xaa',
        activeIndex:'home'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }

  }
</script>
<style lang="scss" scoped>
.top{
  width: 100%;
  background: #f5f5f5;
  position: relative;
  .left{
    margin-left: 20px;
    display: inline-block;
  }
  .right{
    display: inline-block;
    position: absolute;
    right:0;
    margin-right: 20px;
  }
}
</style>
