<template>
  <div id="app">
    <div class="title">我是Vue栗子</div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'app',
  provide () {
    return {
      userInfo: {
        name: '前端胖头鱼'
      }
    }
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}

body{
  padding: 20px;
}

.title{
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-align: center;
}
</style>
