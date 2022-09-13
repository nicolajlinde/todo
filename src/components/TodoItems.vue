<template>
  <li :class="{ inactive: !todo.active }">
    <div class="come-together-right-now">
      <p>
        <input
          class="finish"
          type="checkbox"
          name="finish"
          inactiveTodosChecked
          v-model="setCheckboxActive"
          @click="setTodoAsInactive"
        />
      </p>
      <p v-if="!isEditing" @click="editing">
        {{ todo.todo }}
      </p>
      <input
        v-else-if="isEditing"
        type="text"
        class="edit-input"
        tabindex="0"
        v-model="editInput"
        ref="focusInput"
        @keydown.enter="editTodo"
        @blur="outOfEditingEvent"
      />
    </div>
    <p v-if="todo.active" @click="deleteTodo">x</p>
  </li>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref, onUpdated } from "vue";
import { useStore } from "vuex";

// Props
const props = defineProps({
  id: { type: String, required: true },
});

// Store
const store = useStore();
const todo = store.getters.findTodoById(props.id);

const isEditing = ref<boolean>(false);
const editInput = ref<HTMLInputElement>(todo.todo);
const focusInput = ref(null);

const editing = () => {
  if (todo.active === true) {
    isEditing.value = !isEditing.value;
    // console.log(editInput.value);
    if (isEditing.value === true) {
      focusInput.value?.focus();
    }
  }
};

const editTodo = () => {
  try {
    store.commit("editTodo", { id: props.id, todo: editInput.value });
    isEditing.value = false;
  } catch (e) {
    console.log(e);
  }
};

const deleteTodo = () => {
  store.commit("removeTodo", { id: props.id });
};

const setTodoAsInactive = () => {
  store.commit("setTodoAsInactive", { id: props.id });
};

const outOfEditingEvent = () => {
  isEditing.value = false;
};

// Computed
const setCheckboxActive = computed(() => {
  if (todo.active) {
    return false;
  }
  return true;
});

// Updated Lifecycle
onUpdated(() => {
  // if (isEditing.value === true) {
  //   editInput.value.focus()
  // }
  console.log("updated");
  console.log(editInput.value);
});
</script>

<style scoped>
.edit-input,
.edit-input:active,
.edit-input:focus {
  font-size: 1rem;
  border: none;
  width: 100%;
  outline: none;
  vertical-align: baseline;
}

li {
  padding: 10px 15px;
  margin: 10px auto;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
}

p {
  padding: 5px;
  margin: 0;
}

a {
  color: rgba(180, 13, 13, 0.807);
  text-decoration: none;
  vertical-align: middle;
}

a:hover {
  text-decoration: underline;
}

.finish {
  height: auto;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  cursor: progress;
}

.pointer {
  cursor: progress;
}

.inactive {
  background: rgb(169, 169, 169);
}

.come-together-right-now {
  display: inline-flex;
  width: 100%;
}
</style>
