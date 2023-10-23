<script setup lang="ts">
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([] as { id?: number, text: string, completed: boolean }[] );

const tabState = ref('Current');

function addTask() {
  tasks.value.push({ text: newTask.value, completed: false });
  newTask.value = '';
};
</script>

<template>
    <h1 is-large class="title">My Activity</h1>
    <div class="column is-half-desktop is-offset-one-quarter">
      <div class="panel is-link">
        <p class="panel-heading is-centered">
          Add Workout
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input  class="input" type="text" placeholder="What do you want to do"
                    
          
                    v-model="newTask"
                    @keyup.enter="addTask"
                    />
                    </p>
                    </div>
        </div>
        </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  