<template>
  <div class="dynamic-index">
    <slotBase>
      <template
        v-for="(slotItem, slotKey) in slots"
        v-slot:[slotKey]
      >
        <component :key="`${slotKey}-${i}`" v-for="(comp, i) in slotItem" :is="comp.name"></component>
      </template>
    </slotBase>
  </div>
</template>

<script>
import slotBase from './components/slotBase.vue'
import styleComp from './style.vue'
import watchComp from './watch.vue'
import classComp from './class.vue'

// 这里是模拟编辑器或者render

export default {
  name: 'dynamicSlot',
  components: {
    slotBase,
    styleComp,
    watchComp,
    classComp
  },
  data () {
    return {
      slotName: 'head',
      slots: {
        head: [
          {
            name: 'styleComp'
          }
        ],
        body: [
          {
            name: 'watchComp'
          }
        ],
        footer: [
          {
            name: 'classComp'
          }
        ]
      }
    }
  },
  methods: {
    getSlot (slotKey) {
      return slotKey
    }
  }
}
</script>

<style>