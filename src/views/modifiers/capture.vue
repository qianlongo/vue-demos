<template>
  <div class="capture parent" @click.capture="onClickParent">
    父节点
    <div class="child" @click.capture="onClickChild">子节点</div>
  </div>
</template>

<script>
export default {
  name: 'capture',
  methods: {
    onClickParent () {
      console.log('我是父节点')
    },
    onClickChild () {
      console.log('我是子节点')
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