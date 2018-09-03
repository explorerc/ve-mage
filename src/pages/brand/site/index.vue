<template>
  <div class="site-container">
    <div class="group">
      <h3>活动官网</h3>
      <div class="group-content">
        <span class="state">是否开启</span>
        <el-switch
          v-model="enable"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </div>
    </div>
    <div class="group">
      <h3 class="fwn">我的模版</h3>
      <div class="group-content">
        <div class="template-block">
          <img src="../../../assets/image/tp3.png" alt="">
          <div class="option-wrap">
            <div class="option-group">
              <a data-tid="tp_001">编辑</a>
              <a data-tid="tp_001">预览</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="group">
      <h3 class="fwn">模板库</h3>
      <div class="group-content fs0">
        <div class="template-block">
          <img src="../../../assets/image/tp1.png" alt="">
          <div class="option-wrap">
            <div class="option-group">
              <a data-tid="tp_001">使用</a>
              <a data-tid="tp_001">预览</a>
            </div>
          </div>
        </div>
        <div class="template-block">
          <img src="../../../assets/image/tp2.png" alt="">
          <div class="option-wrap">
            <div class="option-group">
              <a data-tid="tp_001">使用</a>
              <a data-tid="tp_001">预览</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      enable: true
    }
  }
}
</script>

<style scoped lang="scss">
.site-container {
  .group-content {
    padding: 25px 0;
    &:first-of-type {
      padding: 35px 0;
    }
    .state {
      padding: 0 20px;
    }
    .template-block {
      display: inline-block;
      width: 290px;
      height: 195px;
      border: 1px solid #dadada;
      margin-right: 25px;
      font-size: 14px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover {
        .option-wrap {
          display: block;
        }
      }
      .option-wrap {
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .option-group {
          position: absolute;
          right: 0;
          bottom: 0;
          a {
            background-color: white;
            padding: 10px 15px;
            border-right: 1px solid #dadada;
            float: left;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
