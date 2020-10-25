<template>
  <!-- 上のコンポーネントと1rem話す -->
  <div class="mt-4">
    <!-- inline-block & border追加 & height 2rem & padding 0.5rem -->
    <input class="inline-block border border-gray-700 h-8 p-2" v-model="value" />
    <!-- 影追加 & width 5rem & margin left 1rem & 文字白 & 丸角 -->
    <button class="shadow w-20 h-8 ml-4 bg-blue-400 text-white rounded-md" type="button" @click="updateList">登録</button>
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