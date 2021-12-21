<template>
  <div class="slot">
    <button @click="onToggleVisible">切换dialog</button>
    <Dialog
      :visible.sync="visible"
    >
      <template v-slot:title>
        <div class="dialog-title">默认插槽</div>
      </template>
      <template v-slot:main>
        <div class="slot-body">前端胖头鱼</div>
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