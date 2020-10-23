import { createStore, Commit } from 'vuex';
const state = {
  todoList: ['hoge', 'huga', 'piyo']
};
type state = typeof state;

const mutations = {
  addItem(state: state, item: string) {
    state.todoList = [...state.todoList, item];
  }
}

const actions = {
  // ActionContextで型定義しても良さそうだが、ほとんど使わないので独自型定義
  addItem: ({commit}: {commit: Commit}, item: string) => commit('addItem', item)
};

export default createStore({
  state,
  actions,
  mutations
});