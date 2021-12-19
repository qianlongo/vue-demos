<template>
  <div class="v-for">
    <div 
      class="v-for-item"
      v-for="item in list"
      :key="item.id"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vfor',
  data () {
    return {
      list: [
        {
          id: 1,
          name: '前端',
        },
        {
          id: 2,
          name: '后端',
        },
        {
          id: 3,
          name: 'android',
        },
        {
          id: 4,
          name: 'ios',
        },
      ]
    }
  }
}
</script>

<style>

</style>