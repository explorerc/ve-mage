<template>
  <span >
    <template v-if="!this.$scopedSlots.slot1">{{showTime.day}}天{{showTime.hour}}小时{{showTime.minute}}分钟{{showTime.second}}秒</template>
    <slot name='slot1' :day="showTime.day" :hour="showTime.hour" :minute="showTime.minute" :second="showTime.second"></slot>
  </span>
</template>

<script>
  export default {
    name: 'com-countdown',
    data () {
      return {
        // content: '',
        showTime: {
          day: 0,
          hour: 0,
          minute: 0,
          second: 0
        },
        timer: null
      }
    },
    props: {
      endTime: {
        type: String,
        default: ''
      },
      endText: {
        type: String,
        default: '已结束'
      }
    },
    mounted () {
      // console.log(this)
      // debugger
      this.countDown(this.endTime)
    },
    // computed:{
    //   djs(){
    //     let sec=this.endTime
    //     this.showTime.day = sec / 3600 / 24 >> 0
    //     this.showTime.hour = ((sec / 3600 % 24 >> 0) + '').padStart(2, 0)
    //     this.showTime.minute = ((sec / 60 % 60 >> 0) + '').padStart(2, 0)
    //     this.showTime.second = ((sec % 60 >> 0) + '').padStart(2, 0)
    //     return `${this.showTime.day}天${this.showTime.hour}时${this.showTime.minute}分${this.showTime.second}秒`
    //   }
    // },
    watch: {
      endTime (value) {
        console.log(value)
        this.countDown(value)
      }
    },
    methods: {
      fomatDate (sec) {
        this.showTime.day = ((sec / 3600 / 24 >> 0) + '').padStart(2, 0)
        this.showTime.hour = ((sec / 3600 % 24 >> 0) + '').padStart(2, 0)
        this.showTime.minute = ((sec / 60 % 60 >> 0) + '').padStart(2, 0)
        this.showTime.second = ((sec % 60 >> 0) + '').padStart(2, 0)
        if (sec === 0) {
          this.$emit('timeOut')
          clearInterval(this.timer)
        }
      },
      countDown (time) {
        this.timer = setInterval(i => {
          this.fomatDate(time--)
          if (time < 0) {
            clearInterval(this.timer)
          }
        }, 1000)
      }
    },
    destroyed () {
      clearInterval(this.timer)
    }
  }
</script>
