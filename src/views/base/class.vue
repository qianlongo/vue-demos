<template>
  <button :class="buttonClasses" @click="onClickActive">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'class',
  data () {
    return {
      isActive: false,
    }
  },
  computed: {
    buttonText () {
      return this.isActive ? '已选中' : '未选中'
    },
    buttonClasses () {
      return [ 'button', this.isActive ? 'active' : '' ]
    }
  },
  methods: {
    onClickActive () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
.button{
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 6px;
  margin: 0 auto;
  padding: 0;
  border: none;
  text-align: center;
  background-color: #efefef;
}

.active{
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  color: #fff
}

</style>