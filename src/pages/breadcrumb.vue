<template>
  <div class="breadcrum-wrap">
    <ul>
      <li v-for="(item,index) in breads"
          :key="index">
        <span v-if="!item.url"><span class="split"
                v-if="index>0">></span>{{item.title}}</span>
        <router-link v-if="item.url"
                     :to="item.url"><span class="split"
                v-if="index>0">></span>{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from 'src/router/routes'
export default {
  props: {
    breads: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      bs: []
    }
  },
  mounted () {
    // this.bs.unshift({
    //   title: this.$route.meta.title,
    //   url: null
    // })
    // this.doCom(this.$route)
  },
  methods: {
    doCom (route) {
      if (route.meta && route.meta.parent) {
        let ret = this.getParent(route.meta.parent)
        this.bs.unshift({ title: ret.meta.title, url: { path: ret.path, query: this.$route.query, params: this.$route.params } })
        console.log(ret.meta)
        if (ret.meta.parentTitle) {
          this.bs.unshift({ title: ret.meta.parentTitle, url: null })
          this.doCom({})
        } else {
          this.doCom(ret)
        }
      } else {
        console.log(this.bs)
      }
    },
    getParent (name) {
      let ret = null
      routes.forEach(route => {
        if (route.name === name) {
          ret = route
        }
        if (!ret && route.children) {
          route.children.forEach((item) => {
            if (item.name === name) {
              ret = item
            }
          })
        }
      })
      return ret
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrum-wrap {
  font-size: 14px;
  /deep/ {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        float: left;
        color: #888888;
        .split {
          padding: 0 2px;
        }
        &:last-child {
          color: #555555;
        }
      }
    }
  }
}
</style>
