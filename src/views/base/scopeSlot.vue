<template>
  <div class="slot">
    <button @click="onToggleVisible">切换dialog</button>
    <Dialog
      :visible.sync="visible"
    >
      <template v-slot:title>
        <div class="dialog-title">作用域插槽</div>
      </template>
      <!-- 注意这里 -->
      <template v-slot:main="{ userInfo }">
        <!-- 注意这里userInfo是Dialog组件内部的数据 -->
        <div class="slot-body">你好{{ userInfo.name }}</div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from './components/dialog.vue'

export default {
  name: 'nameSlot',
  components: {
    Dialog,
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    onToggleVisible () {
      this.visible = !this.visible
    }
  }
}
</script>

<style>
.slot-body{
  color: #646566;
}
</style>