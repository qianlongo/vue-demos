<template>
  <div class="self-container">
    <div class="self" @click.self="onClickSelf">
      <div class="inner" @click="onClickInner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'self',
  methods: {
    onClickSelf () {
      console.log('我是self节点')
    },
    onClickInner () {
      console.log('我是inner节点')
    }
  }
}
</script>

<style scoped>
  .self-container{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .self{
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  }
</style>