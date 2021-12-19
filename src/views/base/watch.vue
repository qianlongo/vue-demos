<template>
  <div class="watch">
    <div class="selects">
      <button 
        v-for="(item, i) in selects"
        :key="i"
        @click="onSelect(item)"
      >
        {{ item }}
      </button>
    </div>
    <div class="result">
      {{ result }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'watch',
  data () {
    return {
      fetching: false,
      selects: [
        'boy',
        'girl'
      ],
      selectValue: ''
    }
  },
  computed: {
    result () {
      return this.fetching ? '请求中' : `请求结果： 选中${this.selectValue || '~'}`
    }
  },
  watch: {
    selectValue () {
      this.fetch()
    }
  },
  methods: {
    onSelect (value) {
      this.selectValue = value  
    },
    fetch () {
      if (!this.fetching) {
        this.fetching = true

        setTimeout(() => {
          this.fetching = false
        }, 1000)
      }
    }
  }
}
</script>

<style>
button{
  margin: 10px;
  padding: 10px;
}
</style>