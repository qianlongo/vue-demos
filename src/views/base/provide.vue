<template>
  <div class="provide-inject">{{ userInfo.name }}</div>
</template>

<script>
export default {
  name: 'provideInject',
  inject: [ 'userInfo' ]
}
</script>

<style>

</style>