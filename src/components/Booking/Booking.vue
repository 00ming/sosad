<template >
  <div class="booking">
    <div class="container">
      <div class="menu-wrapper">
        <ul style="font-size=0">
          <li class="menu-item">凉菜</li>
          <li class="menu-item">汤</li>
          <li class="menu-item">蔬菜类</li>
          <li class="menu-item">肉类</li>
          <li class="menu-item">主食</li>
          <li class="menu-item">甜品</li>

        </ul>
      </div>
      <div class="foods-wrapper">
        <div class="content">
        <ul>
          <li>
            <div class="classify">
                凉菜
            </div>
            <div class="item">
              <h2 class="name">菜名</h2>
              <p class="desc">描述</p>
              <div class="price">
                ￥150元
              </div>
            </div>
          </li>
          <li>
            <div class="classify">
              汤
            </div>
          </li>
          <li>
            <div class="classify">
              蔬菜类
            </div>
          </li>
          <li>
            <div class="classify">
              肉类
            </div>
          </li>
          <li>
            <div class="classify">
              主食
            </div>
          </li>
          <li>
            <div class="classify">
              甜品
            </div>
          </li>


          </li>
        </ul>
      </div>

      </div>
    </div>


    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  display: flex;
  overflow: hidden;
  .menu-wrapper{
    flex: 0 0 180px;
    width: 180px;
    background: #acc1e4;
    height: 568px;
    .menu-item{
      // display: table;
      height: 54px;
      width: 170px;
      padding: 0 12px;
      line-height: 54px;
      position: relative;
      left: -12px;
      border-bottom:1px solid rgba(7,17,27,0.1);
    }
  }
  .foods-wrapper{
    width: 100%;
    .content{
      .classify{
        width: 100%;
        border-left: 2px solid #b7b979;
        border-bottom: 1px solid #b7b979;
        background: #f6fa7b;
        text-align: left;
        padding: 10px 20px;
        color: #1b0685;
        font-weight: 600;
      }
      .item{
        border-left: 2px solid #b7b979;
        .name{
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }


}
</style>
