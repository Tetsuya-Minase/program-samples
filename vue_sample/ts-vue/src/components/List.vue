<template>
<div>
    <input type="text" id="data" v-model="todo">
    <button @click="addTodo()">登録</button>
    <ul id="list">
        <li v-for="todoItem in todoList">
            {{todoItem}}
        </li>
    </ul>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

// @Component デコレータはクラスが Vue コンポーネントであることを示します
@Component({})
export default class ListComponent extends Vue {
  @Prop() public addItems!: string[];
  private todo: string = '';
  private todoList: string[] = [];

  constructor() {
      super();
      this.todoList = this.todoList.concat(this.addItems);
  }

  private addTodo() {
      this.todoList.push(this.todo);
      this.todo = '';
  }
}
</script>
<style lang="scss" scoped>
ul {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    li:nth-child(even) {
        color: blue;
    }
}
#list {
    text-align: left
}
</style>

