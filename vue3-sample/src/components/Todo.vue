<template>
  <div>
    <h1>TodoList</h1>
    <TodoList />
    <TodoForm />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./todo/TodoList.vue";
import TodoForm from "./todo/TodoForm.vue";

export default defineComponent({
  components: {
    TodoList,
    TodoForm,
  }
});
</script>