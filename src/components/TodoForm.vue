<template>
  <form v-on:submit.prevent="submit">
    <input type="text" name="todo" placeholder="Add Assignment.." v-model="todo">
  </form>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

const todo = ref<string>("")

const store = useStore();

const submit = () => {
    store.dispatch('addTodo', todo.value)
    todo.value = "";
}

</script>

<style scoped>
form {
  display: flex;
}

input {
  flex: 100%;
  width: 100%;
  padding: 15px 15px;
  margin: 0;
  border-radius: 7px;
  border: none;
  font-size: 1rem;
}

input:active
input:focus {
    border: 5px solid rgba(5, 51, 104, 0.855);
}

input::placeholder {
  font-weight: bold;
  color: black;
}
</style>
