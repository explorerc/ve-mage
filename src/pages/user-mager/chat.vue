<template>
    <div id="app">
        <div class="sidebar">
            <div class="card">
                <header>
                    <img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
                    <p class="name">{{user.name}}</p>
                </header>
                <footer>
                    <!--<input class="search" type="text" placeholder="search user..."  @keyup="onKeyup | debounce 150">-->
                    <input class="search" type="text" placeholder="search user..."  @keyup="onSearchKeyup">
                </footer>
            </div>
            <div class="list">
                <ul>
                    <li v-for="item in sessions" :class="{ active: item.id === currentId }" @click="selectSession(item.id)">
                        <img class="avatar"  width="30" height="30" :alt="item.user.name" :src="item.user.img">
                        <p class="name">{{item.user.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main">
            <div class="message" v-scroll-bottom="session.messages">
                <ul v-if="session">
                    <li v-for="item in session.messages">
                        <p class="time">
                            <span>{{ item.date | time }}</span>
                        </p>
                        <div class="main" :class="{ self: item.self }">
                            <img class="avatar" width="30" height="30" :src="item.self ? user.img : session.user.img" />
                            <div class="text">{{ item.content }}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="text">
                <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" @keyup="onKeyup"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
import { actions } from './store'
// import Card from './chat/card'
// import List from './chat/list'
// import Text from './chat/text'
// import Message from './chat/message'
import EventBus from 'src/utils/eventBus'

export default {
  // components: { Text, Message },
  data () {
    return {
      content: ''
    }
  },
  vuex: {
    actions: actions,
    getters: {
      user: ({ user }) => user,
      filterKey: ({ filterKey }) => filterKey
    },
    sessions: ({ sessions, filterKey }) => {
      let result = sessions.filter(session => session.user.name.includes(filterKey))
      return result
    },
    currentId: ({ currentSessionId }) => currentSessionId,
    user: ({ user }) => user,
    session: ({ sessions, currentSessionId }) => sessions.find(session => session.id === currentSessionId)
  },
  filters: {
    // 将日期过滤为 hour:minutes
    time (date) {
      if (typeof date === 'string') {
        date = new Date(date)
      }
      return date.getHours() + ':' + date.getMinutes()
    }
  },
  directives: {
    // 发送消息后滚动到底部
    'scroll-bottom' () {
      this.vm.$nextTick(() => {
        this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight
      })
    }
  },
  created () {
    // actions.initData()
    EventBus.$emit('breads', [{
      title: '用户管理'
    }, {
      title: '聊天管理',
      url: `/goodMager/list/`
    }])
  },
  methods: {
    onSearchKeyup (e) {
      this.search(e.target.value)
    },
    onKeyup (e) {
      if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
        this.sendMessage(this.content)
        this.content = ''
      }
    }
  }
}
</script>



<style lang="scss" scoped>
.card {
        padding: 12px;
        border-bottom: solid 1px #24272C;

        footer {
            margin-top: 10px;
        }

        .avatar, .name {
            vertical-align: middle;
        }
        .avatar {
            border-radius: 2px;
        }
        .name {
            display: inline-block;
            margin: 0 0 0 15px;
            font-size: 16px;
        }
        .search {
            padding: 0 10px;
            width: 100%;
            font-size: 12px;
            color: #fff;
            height: 30px;
            line-height: 30px;
            border: solid 1px #3a3a3a;
            border-radius: 4px;
            outline: none;
            background-color: #26292E;
        }
    }
.list {
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
}
.message {
    padding: 10px 15px;
    overflow-y: scroll;

    li {
        margin-bottom: 15px;
    }
    .time {
        margin: 7px 0;
        text-align: center;

        > span {
            display: inline-block;
            padding: 0 18px;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
            background-color: #dcdcdc;
        }
    }
    .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: calc(100% - 40px);
        min-height: 30px;
        line-height: 2.5;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #fafafa;
        border-radius: 4px;

        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #fafafa;
        }
    }

    .self {
        text-align: right;

        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }
        .text {
            background-color: #b2e281;

            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #b2e281;
            }
        }
    }
}
.text {
    height: 160px;
    border-top: solid 1px #ddd;
    textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: "Micrsofot Yahei";
        resize: none;
    }
}
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: calc(100% - 160px);
    }
}
</style>
