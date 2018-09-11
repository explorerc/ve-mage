<template>
  <span :endTime="endTime" :endText="endText">
    <template v-if="!this.$slots.slot1">{{showTime.day}}天{{showTime.hour}}小时{{showTime.minute}}分钟{{showTime.second}}秒</template>
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
        }

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
      console.log(this)
      this.countDown(this.endTime)
    },
    methods: {
      fomatDate (sec) {
        this.showTime.day = sec / 3600 / 24 >> 0
        this.showTime.hour = ((sec / 3600 % 24 >> 0) + '').padStart(2, 0)
        this.showTime.minute = ((sec / 60 % 60 >> 0) + '').padStart(2, 0)
        this.showTime.second = ((sec % 60 >> 0) + '').padStart(2, 0)
        if (sec === 0) {
          this.$emit('timeOut')
          clearInterval(this.timer)
        }
      },
      countDown (time) {
        let interval = setInterval(i => {
          this.fomatDate(time--)
          if (time < 0) {
            clearInterval(interval)
          }
        }, 1000)

        // let self = this
        // let timer = setInterval(function () {
        //   let nowTime = new Date()
        //   let endTime = new Date(timestamp * 1)
        //   let t = endTime.getTime() - nowTime.getTime()
        //   if (t > 0) {
        //     let day = Math.floor(t / 86400000)
        //     let hour = Math.floor((t / 3600000) % 24)
        //     let min = Math.floor((t / 60000) % 60)
        //     let sec = Math.floor((t / 1000) % 60)
        //     hour = hour < 10 ? '0' + hour : hour
        //     min = min < 10 ? '0' + min : min
        //     sec = sec < 10 ? '0' + sec : sec
        //     let format = ''
        //     if (day > 0) {
        //       format = `${day}天${hour}小时${min}分${sec}秒`
        //     }
        //     if (day <= 0 && hour > 0) {
        //       format = `${hour}小时${min}分${sec}秒`
        //     }
        //     if (day <= 0 && hour <= 0) {
        //       format = `${min}分${sec}秒`
        //     }
        //     self.content = format
        //   } else {
        //     clearInterval(timer)
        //     self.content = self.endText
        //     self._callback()
        //   }
        // }, 1000)
      // },
      // _callback () {
      //   if (this.callback && this.callback instanceof Function) {
      //     this.callback(...this)
      //   }
      // }
      }
    }
  }
</script>
