<template>
  <div class="parent" @click="onClickParent">
    我是爸爸
    <div class="child" @click="onClickChild($event)">
      我是儿子
    </div>
  </div> 
</template>

<script>
export default {
  name: 'stop',
  methods: {
    onClickParent () {
      console.log('我是爸爸')
    },
    onClickChild (event) {
      console.log('我是儿子')
      event.stopPropagation()
    }
  }
}
</script>

<style scoped>
.parent{
  padding: 20px;
}

.child{
  padding: 10px;
}
</style>