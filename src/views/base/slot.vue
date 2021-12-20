<template>
  <div class="slot">
    <button @click="onToggleVisible">切换dialog</button>
    <Dialog
      :visible.sync="visible"
      title="默认插槽"
    >
      <div class="slot-body">前端胖头鱼</div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from './components/dialog.vue'

export default {
  name: 'slot',
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