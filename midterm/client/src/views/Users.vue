<script setup lang="ts">
//import { getUsers, type User } from '@/model/users';
import { ref } from 'vue'

//const users = ref([] as User[])
//const isLoading = ref(false)
//isLoading.value = true;
//setTimeout(()=> { 
   // users.value = getUsers()
  //  isLoading.value = false;
 //<}, 1000)

</script>

<template>

    <div class="buttons">
  <button class="button is-primary"><strong>+ Add User</strong></button>
</div>

<div class = "container">
<table>
  <tr>
    <th></th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Emails</th>
    <th>Handle</th>
    <th>Is Admin</th>
    <th></th>
  </tr>
  <tr>
    <td>Angel</td>
    <td>Maria</td>
    <td>Germany</td>
  </tr>
</table>
</div>
</template>

<style scoped>

.buttons{
    margin-top: 10px;
    margin-bottom: 0px;

}
.container{
    font-size:20px;
}

table{
    border-collapse: collapse;
    width: 100%;
    color: #588c7e;
    font-family: monospace;
    text-align: left;
}

td, th{
    border: 1px solid #000;
    padding: 8px;
}
</style>