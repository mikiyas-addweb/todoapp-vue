<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button @click="up(index)" v-if="index > 0" style="" class="done">
        <h3 class="h3">&uarr;</h3>
      </button>
      <button
        @click="down(index)"
        v-if="index < $store.state.tasks.length - 1"
        style=""
        class="done"
      >
        <h3 class="h3">&darr;</h3>
      </button>
      <button @click="toggleDone">{{ task.done ? "Undo" : "Done" }}</button>
      <button @click="removeTask" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
import "../../assets/css/main.css";
export default {
  props: ["task", "index"],
  methods: {
    toggleDone() {
      this.$store.commit("TOGGLE_TASK", this.task);
    },
    removeTask() {
      if (confirm("Do you really want to delete the Task?")) {
        this.$store.commit("REMOVE_TASK", this.task);
      }
    },
    up(value) {
      this.$store.commit("MOVE_TASK_UP", value);
    },
    down(value) {
      this.$store.commit("MOVE_TASK_DOWN", value);
    },
  },
};
</script>

<style></style>
