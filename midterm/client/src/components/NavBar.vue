<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>



<template>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/HomeView">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="33" height="33" />
      </router-link>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
       <router-link class="navbar-item" to="/MyActivity">
        <span class = "icon is-medium">
            <i class= "fas fa-running"></i>
        </span>
          My Activity
      </router-link>

        <router-link class="navbar-item" to="/statistics">
            <span class = "icon is-medium">
                <i class="fas fa-solid fa-chart-line"></i>
            </span>
          Statistics
        </router-link> 

        <router-link class="navbar-item" to="/FriendActivity">
            <span class = "icon is-medium">
                <i class="fas fa-users"></i>
            </span>
          Friend's Activity
        </router-link>  

        <router-link class="navbar-item" to="/PeopleSearch">
            <span class = "icon is-medium"> 
                <i class="fas fa-search"></i>
             </span>
          People Search
             </router-link>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Admin
          </a>
  
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/Users">
              Users
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active{
    font-weight: bold;
    border-bottom: 2px solid #00d1b2;
}


.logo{
    margin-left: 30px;
    padding-left: 5px;
}
</style>

