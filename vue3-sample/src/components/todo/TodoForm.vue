<template>
  <div>
    <input v-model="value" />
    <button type="button" @click="updateList">登録</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
// 型定義がなく通らないので、エラーは無視する
// https://github.com/vuejs/vuex/issues/1736
// @ts-ignore
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore();
    const value = ref<string>('');
    const updateList = () => {
      store.dispatch('addItem', value.value);
      // テキストボックスの中身をリセットしておく
      value.value = '';
    }
    return {
      value,
      updateList
    }
  }
})
</script>