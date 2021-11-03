<template>
  <div class="order">
    <div class="order-0">
      <a href="https://juejin.cn/" class="order-parent" @click.self.prevent="onClickParent">
        我是父节点，会跳转掘金
        <br />
        <span class="order-child" @click="onClickChild">
          我是子节点
        </span>
      </a>
      <hr />
    </div>
    <div class="order-2">
      <a href="https://juejin.cn/" class="order-parent" @click.prevent.self="onClickParent">
        我是父节点，无法跳转掘金
        <br />
        <span class="order-child" @click="onClickChild">
          我是子节点
        </span>
      </a>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'order',
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

<style>
.order-2{
  padding-top: 20px;
}

.order-parent{
  padding: 20px;
}

.order-child{
  padding: 30px;
}
</style>