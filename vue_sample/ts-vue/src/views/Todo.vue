<template>
  <div class="todo">
    <!-- <ListComponent :addItems="addList"/> -->
    <ListComponent :addItems="addList"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListComponent from "@/components/List.vue";

@Component({
  components: {
    ListComponent,
  },
})
export default class Todo extends Vue {
    public addList = ['test1', 'test2'];
}
</script>