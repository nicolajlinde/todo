<template>
  <nav-bar></nav-bar>
  <div id="content">
    <section>
      <p class="bolder">Active:</p>
      <active-todos-list></active-todos-list>
      <todo-form></todo-form>
    </section>
    <section id="finished-todos">
      <p class="bolder">Inactive:</p>
      <inactive-todos-list></inactive-todos-list>
    </section>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/UI/NavBar.vue";
import ActiveTodosList from "@/components/ActiveTodosList.vue";
import InactiveTodosList from "@/components/InactiveTodosList.vue";
import TodoForm from "@/components/TodoForm.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat", sans-serif;
  background: rgba(7, 80, 164, 0.855);
  color: white;
}

#content {
  margin: 0 auto;
  width: 1000px;
}

#finished-todos {
  margin-top: 10%;
}

.bolder {
  font-weight: bold;
}
</style>
