<script setup lang="ts">
</script>

<template>
 
<div class = "container">
  <div class="columns">
                  <div class="column is-one-quarter">
                    <div class="card">
                    <div class="card-content">
                    </div>
                    </div>
                </div>
               <div class="column">
                  <div class = "card">
                    <br>
                    <p>Today</p>
                  <div class = "flex-container">  
                    <div class="card-content">
                      <div class = "subject">
                      0 ft
                    </div>
                      <div class = "info">
                      Distance
                    </div>
                    </div>
                    <div class="card-content">
                      <div class = "subject">
                      0:0
                    </div>
                      <div class = "info">
                      Duration
                    </div>
                    </div>
                    <div class="card-content">
                      <div class = "subject">
                      NaN
                      </div>
                    </div>
                    <div class="card-content">
                      <div class = "subject">
                      0 
                      </div>
                      <div class = "info">
                      Calories
                      </div>
                      </div>
                    <div class="card-content">
                      <div class = "subject">
                      mph
                      </div>
                      <div class = "info">
                      Avg Pace
                      </div>
                    </div>
                  </div>
                </div>

                <!-- New Card-->
                <div class = "card">
                    <br>
                    <p>This Week</p>
                  <div class = "flex-container">  
                    <div class="card-content">
                      <div class = "subject">
                      0 ft
                    </div>
                      <div class = "info">
                      Distance
                    </div>
                    </div>
                    <div class="card-content">
                      <div class = "subject">
                      0:0
                    </div>
                      <div class = "info">
                      Duration
                    </div>
                    </div>
                    <div class="card-content">
                      <div class = "subject">
                      NaN
                      </div>
                    </div>
                    <div class="card-content">
                      <div class = "subject">
                      0 
                      </div>
                      <div class = "info">
                      Calories
                      </div>
                      </div>
                    <div class="card-content">
                      <div class = "subject">
                      mph
                      </div>
                      <div class = "info">
                      Avg Pace
                      </div>
                    </div>
                  </div>
                </div>
                </div>        
      
                <div class="column is-one-quarter">
                    <div class="card">
                    <div class="card-content">
                    </div>
                    </div>
                </div>
                </div> 

                <!--New Card-->
                <div class = "card">
                    <br>
                    <p>All Time</p>
                  <div class = "flex-container">  
                    <div class="card-content">
                      <div class = "subject">
                      2.1 mi
                    </div>
                      <div class = "info">
                      Distance
                    </div>
                    </div>
                    <div class="card-content">
                      <div class = "subject">
                      1:45
                    </div>
                      <div class = "info">
                      Duration
                    </div>
                    </div>
                    <div class="card-content">
                      <div class = "subject">
                      406 
                      </div>
                      <div class = "info">
                      Calories
                      </div>
                      </div>
                    <div class="card-content">
                      <div class = "subject">
                      1.1 mph
                      </div>
                      <div class = "info">
                      Avg Pace
                      </div>
                    </div>
                  </div>
                </div>
  </div>
</template>

<style scoped>
p{
  text-align: center;
  font-weight: bold;
}
.container{
  padding-top: 5px;
}
.container .flex-container{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.card{
  margin: 10px;
}
.container .flex-container .card-content{
  width: 45%;
  height: auto;
  text-align: center;
  padding: 10px;
  margin: 10px;
  color: hsl(141, 53%, 53%);
}

.subject{
  font-size: 50px;
}

</style>