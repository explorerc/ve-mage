<template>
  <div>
    <ul>
      <li v-for="(item,index) in dragData" :key="item.id">
        <p class="v-question-title">
          <span class="v-index">{{index+1}}</span>{{item.title}}<span class="v-red" v-if="item.required === 'Y'">*</span>
        </p>
        <p class="v-content">
          {{item.answer}}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    dragData: {
      type: Array,
      default: null
    }
  }
}
</script>
