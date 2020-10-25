<template>
  <ul>
    <li v-for="item in todoList" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
// 型定義がなく通らないので、エラーは無視する
// https://github.com/vuejs/vuex/issues/1736
// @ts-ignore
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore();
    // storeの値が変わったときに再描画してほしいので、computedでラップする
    return { todoList: computed(() => store.state.todoList) };
  }
});
</script>
<style scoped>
  li::before {
    content: '▷';
    margin-right: 4px;
  }
</style>