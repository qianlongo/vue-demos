<template>
  <div class="trim">
    <div class="trim-item">
      <input type="text" v-model="name">
      <p>用户名：<span>{{ name }}</span></p>
    </div>
    <div class="trim-item">
      <input type="text" v-model.trim="name2">
      <p>用户名2：<span>{{ name2 }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trim',
  data () {
    return {
      name: '',
      name2: '',
    }
  },
  watch: {
    name (newVal) {
      console.log(`'----${newVal}----'`)
    },
    name2 (newVal) {
      console.log(`'----${newVal}----'`)
    },
  }
}
</script>

<style scoped>
  .trim-item{
    padding: 20px;
  }

  p span{
    /* padding: 10px 0; */
    background-color: aquamarine;
  }
</style>