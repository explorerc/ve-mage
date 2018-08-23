<template>
  <div class="edit-step-box">
    <div class="edit-content clearfix">
      <div class="edit-content-box fl">
        <ve-editer
          @change="editorChange"
          img-upload-url="/api/upload/do-upload"
          height="600"
          v-model="editerContent"></ve-editer>
      </div>
      <div class="edit-content-temp fr">
        <div class="temp-title">
          选择模板
          <el-button class="live-btn fr" type="primary" plain @click="recoverDefault">恢复默认</el-button>
        </div>
        <div class="temp-boxs">
          <div ref="defaultTem" class="temp-item fl" @click.stop="editerContent='<h1>默认</h1>'">
            默认
          </div>
          <div class="temp-item fl" @click.stop="changeTemp('<h1>2</h1>')">
            2
          </div>
          <div class="temp-item fl" @click.stop="changeTemp('<h1>3</h1>')">
            3
          </div>
          <div class="temp-item fl" @click.stop="changeTemp('<h1>4</h1>')">
            4
          </div>
          <div class="temp-item fl" @click.stop="changeTemp('<h1>5</h1>')">
            5
          </div>
        </div>
      </div>
    </div>
    <div class="step-btns">
      <el-button class="live-btn fl" type="primary" plain @click="goLiveManger">返回邮件管理</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="nextEmail">下一步</el-button>
      <el-button class="live-btn fr" type="primary" plain @click="saveEmail">保存草稿</el-button>
    </div>
  </div>
</template>

<script>
  import VeEditer from 'src/components/ve-editer'
  import editStepTwo from './edit-step-two'

  export default {
    name: 'edit-step-one',
    data () {
      return {
        editerContent: '',
        activeId: ''
      }
    },
    components: {VeEditer},
    mounted () {
      this.$refs.defaultTem.click()
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activeId = queryId
    },
    methods: {
      editorChange (e) {
        console.log('编辑器内容改变事件:')
        console.log(e)
      },
      saveEmail () {
      },
      nextEmail () {
        this.$parent.$data.currentComponent = editStepTwo
      },
      changeTemp (content) {
        this.$messageBox({
          header: '',
          content: '更换邮件模板会导致已编辑的内容丢失',
          cancelText: '取消',
          confirmText: '确认替换',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.editerContent = content
            }
          }
        })
      },
      recoverDefault () {
        this.$messageBox({
          header: '',
          content: '恢复默认模板会导致已编辑的内容丢失',
          cancelText: '取消',
          confirmText: '恢复默认',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.$refs.defaultTem.click()
            }
          }
        })
      },
      goLiveManger () {
        this.$router.push(`/liveMager/email/${this.activeId}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit-step-box {
    height: 800px;
    .edit-content {
      margin: 20px 0;
      .edit-content-temp {
        width: 400px;
        margin-top: 20px;
        .temp-title {
          margin: 0 20px;
        }
        .temp-boxs {
          margin: 20px;
          .temp-item {
            width: 160px;
            height: 180px;
            line-height: 180px;
            margin: 10px;
            text-align: center;
            box-sizing: border-box;
            border: solid 1px #e5e5e5;
          }
        }
      }
      .edit-content-box {
        width: calc(100% - 400px);
      }
    }
    .step-btns {
      margin-top: 20px;
    }
  }

</style>
