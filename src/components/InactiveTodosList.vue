<template>
    <ul>
      <todo-items
        v-for="data in todos"
        :todo="data.todo"
        :active="false"
        :key="data.id"
        :id="data.id"
      ></todo-items>
    </ul>
  </template>
  
  <script lang="ts" setup>
  import TodoItems from "@/components/TodoItems.vue";
  import { computed } from "@vue/runtime-core";
  import { useStore } from "vuex";
  
  // Store
  const store = useStore();
  
  // Computed
  const todos = computed(() => {
  return store.getters.inactiveTodos;
});  </script>
  
  <style scoped>
      ul {
          list-style: none;
          margin: 0;
          padding: 0;
      }
  </style>
  