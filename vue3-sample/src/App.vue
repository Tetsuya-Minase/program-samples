<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Todo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Store } from 'vuex';
import Todo from "./components/Todo.vue";

const store = new Store({
  state: {
    todoList: ['hoge', 'huga', 'piyo']
  },
  mutations: {
    addTodoList(state, value) {
      state.todoList = [state.todoList, value];
    }
  }
});

export default defineComponent({
  name: "App",
  store,
  components: {
    Todo
  },
});
</script>