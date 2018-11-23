<template>
  <div>
    <ul>
      <li v-for="item in dragData" :key="item.id">
        <p class="v-question-title">
          <span class="v-index">{{item.id}}</span>{{item.title}}<span class="v-red">*</span>
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
