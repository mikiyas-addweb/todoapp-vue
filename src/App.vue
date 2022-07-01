<template>
  <main>
   
    <h1>Task Board.</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="Add a new task" 
        @keypress.enter="addTask" />
      <button @click="addTask">Add</button>
    </div>
    
    <div class="tasks">
      

      <Task
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task"
        :index="i" />
        
    </div>
    <div v-if="$store.state.tasks.length" class="create-new">
       <button v-if="$store.state.tasks.length" class="remove" @click="removeAllTasks">Remove All</button>
    </div>
   

  </main>
</template>

<script>
import '../assets/css/main.css'
import Task from './components/Task.vue'
export default {
  data (){
    return {
      newTask: ''
    }
  },
  components: {
    Task
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    },
     removeAllTasks () {
        if(confirm("Do you really want to delete all Tasks?")){
        this.$store.commit('REMOVE_ALL_TASKS');
        }
    }
  }
}
</script>

<style scoped>

</style>
