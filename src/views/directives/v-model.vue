<template>
  <div class="v-model">
    <input type="text" v-model="model1">
    <input type="text" :value="model2" @input="onInput">
    <VModelCustom v-model="model3" />
  </div>
</template>

<script>
import VModelCustom from '../../components/v-model-custom.vue'

export default {
  name: 'vif',
  data () {
    return {
      model1: 'hello',
      model2: 'hello2',
      model3: 'hello3'
    }
  },
  components: {
    VModelCustom
  },
  methods: {
    onInput (e) {
      this.model2 = e.target.value
      console.log(this.model2)
    }
  }
}
</script>
