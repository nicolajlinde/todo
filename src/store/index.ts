import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: Math.random().toString(16).slice(8),
        todo: "Need to finish this TODO app.",
        active: true,
      },
      {
        id: Math.random().toString(16).slice(8),
        todo: "Need to repair walls and paint them today.",
        active: true,
      },
      {
        id: Math.random().toString(16).slice(8),
        todo: "Need to get groceries.",
        active: false,
      },
    ],
  },
  getters: {
    activeTodos(state) {
      return state.todos.filter((todo) => todo.active === true);
    },
    inactiveTodos(state) {
      return state.todos.filter((todo) => todo.active === false);
    },
    findTodoById: (state) => (id: string) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
      console.log(state.todos);
    },
    editTodo(state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      console.log("Edit Event.")
      if (todo) {
        todo.todo = payload.todo;
      } else {
        throw new Error("Couldn't find the todo item requested.");
      }
    },
    removeTodo(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos.splice(index, 1);
    },
    setTodoAsInactive(state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      if (todo) {
        todo.active = !todo.active;
      } else {
        throw new Error("Couldn't find the todo item requested.");
      }
    },
  },
  actions: {
    addTodo(context, payload) {
      const data = {
        id: Math.random().toString(16).slice(8),
        todo: payload,
        active: true,
      };
      context.commit("addTodo", data);
    },
  },
});
